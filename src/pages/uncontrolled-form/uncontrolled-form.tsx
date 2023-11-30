import { useEffect, useRef } from "react";
import styles from "./uncontrolled-form.module.css";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useDispatch } from "react-redux";
import { setForm } from "../../redux/reducers/uncontrolled-form-slice";
import { useNavigate } from "react-router-dom";

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const formValues = useAppSelector((state) => state.uncontrolledForm);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const pass1 = useRef<HTMLInputElement>(null);
  const pass2 = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const male = useRef<HTMLInputElement>(null);
  const female = useRef<HTMLInputElement>(null);
  const yes = useRef<HTMLInputElement>(null);
  const no = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current!.value = formValues.name;
    ageRef.current!.value = formValues.age;
    email.current!.value = formValues.email;
    pass1.current!.value = formValues.password;
    pass2.current!.value = formValues.password;
    country.current!.value = formValues.country;
    male.current!.checked = formValues.isMale;
    female.current!.checked = formValues.isFemale;
    yes.current!.checked = formValues.isAgree;
    no.current!.checked = formValues.isDesagree;
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("here");
    e.preventDefault();
    dispatch(
      setForm({
        name: nameRef.current!.value,
        age: ageRef.current!.value,
        email: email.current!.value,
        password: pass1.current!.value,
        country: country.current!.value,
        isMale: male.current!.checked,
        isFemale: female.current!.checked,
        isAgree: yes.current!.checked,
        isDesagree: no.current!.checked,
        image: "",
        isFilled: true,
      }),
    );

    navigator("/");
    // console.log(image.current!.files);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" ref={ageRef} />
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
        <input type="text" id="country" ref={country} />
        <p className={styles.error_message}>Error</p>

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

        <p className={styles.input_title}>I accept the terms</p>
        <div className={styles.radio_container}>
          <div>
            <label htmlFor="terms_yes" className={styles.label_radio}>
              Yes
            </label>
            <input
              type="radio"
              id="terms_yes"
              name="terms"
              value="yes"
              ref={yes}
            />
          </div>
          <div>
            <label htmlFor="terms_no" className={styles.label_radio}>
              No
            </label>
            <input
              type="radio"
              id="terms_no"
              name="terms"
              value="no"
              ref={no}
            />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" accept="image/*" ref={image} />

        <button className={styles.btn_submit}>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
