import { useEffect, useRef, useState } from "react";
import styles from "./uncontrolled-form.module.css";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useDispatch } from "react-redux";
import {
  setDataBase64,
  setForm,
  setIsFilled,
} from "../../redux/reducers/uncontrolled-form-slice";
import { useNavigate } from "react-router-dom";

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const reader = new FileReader();
  const formValues = useAppSelector((state) => state.uncontrolledForm.formData);
  const countries = useAppSelector((state) => state.countries.countries);
  const [clueIsVisible, setClueIsVisible] = useState(false);
  const [countryList, setCountryList] = useState<string[]>([]);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const pass1 = useRef<HTMLInputElement>(null);
  const pass2 = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const male = useRef<HTMLInputElement>(null);
  const female = useRef<HTMLInputElement>(null);
  const isAgree = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current!.value = formValues.name;
    ageRef.current!.value = `${formValues.age}`;
    email.current!.value = formValues.email;
    pass1.current!.value = formValues.password;
    pass2.current!.value = formValues.password;
    country.current!.value = formValues.country;
    male.current!.checked = formValues.isMale;
    female.current!.checked = formValues.isFemale;
    isAgree.current!.checked = formValues.isAgree;
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setForm({
        name: nameRef.current!.value,
        age: +ageRef.current!.value,
        email: email.current!.value,
        password: pass1.current!.value,
        country: country.current!.value,
        isMale: male.current!.checked,
        isFemale: female.current!.checked,
        isAgree: isAgree.current!.checked,
      }),
    );
    dispatch(setIsFilled(true));
    if (image.current!.files && image.current!.files[0]) {
      reader.readAsDataURL(image.current!.files[0]);
      reader.onload = () => {
        dispatch(setDataBase64(reader.result));
      };
    }

    navigator("/");
  };

  const getCountriesList = () => {
    const value = country.current!.value.toLocaleLowerCase().trim();
    if (value !== "") {
      setCountryList(
        countries.filter((country) => country.toLowerCase().startsWith(value)),
      );
    }
  };

  const setCountry = (value: string) => {
    country.current!.value = value;
  };

  const closeCountryList = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;
    if (!target.closest(styles.countries_list)) {
      setClueIsVisible(false);
    }
  };

  return (
    <div
      className={styles.wrapper}
      onClick={(e) => {
        closeCountryList(e);
      }}
    >
      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" ref={ageRef} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={email} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass1">Password</label>
        <input type="password" id="pass1" ref={pass1} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass2">Repeat password</label>
        <input type="password" id="pass2" ref={pass2} />
        <p className={styles.error_message}>Error</p>

        <label htmlFor="country">Country</label>
        <div className={styles.country_container}>
          <input
            type="text"
            id="country"
            ref={country}
            onChange={getCountriesList}
            onInput={() => {
              setClueIsVisible(true);
            }}
          />
          <div
            className={clueIsVisible ? styles.countries_list : styles.hidden}
          >
            {countryList.map((country, index) => (
              <p
                key={index}
                className={styles.country}
                onClick={() => setCountry(country)}
              >
                {country}
              </p>
            ))}
          </div>
          <p className={styles.error_message}>Error</p>
        </div>

        <p className={styles.input_title}>Gender</p>
        <div className={styles.radio_container}>
          <div>
            <label htmlFor="male" className={styles.label_radio}>
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              ref={male}
            />
          </div>
          <div>
            <label htmlFor="female" className={styles.label_radio}>
              Female
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              ref={female}
            />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" accept=".jpg,.png" ref={image} />

        <div className={styles.checkbox_container}>
          <label htmlFor="terms" className={styles.label_radio}>
            I accept the terms
          </label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value="yes"
            ref={isAgree}
          />
        </div>

        <button className={styles.btn_submit}>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
