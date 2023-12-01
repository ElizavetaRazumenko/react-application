import styles from "./controlled-form.module.css";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useDispatch } from "react-redux";
import {
  setDataBase64,
  setForm,
  setIsContFormUpdate,
  setIsFilled
} from "../../redux/reducers/controlled-form-slice";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchemaForHookForm } from "../../utils/yup-shema";
import { setIsUncFormUpdate } from "../../redux/reducers/uncontrolled-form-slice";

interface Form {
  name: string;
  age: string;
  email: string;
  pass1: string;
  pass2: string;
  country: string;
  isMale: string;
  isAgree: string;
  image: Blob[] | {};
}

const ControlledForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const reader = new FileReader();
  const formValues = useAppSelector((state) => state.controlledForm.formData);
  const countries = useAppSelector((state) => state.countries.countries);
  const [clueIsVisible, setClueIsVisible] = useState(false);
  const [countryList, setCountryList] = useState<string[]>([]);
  const [submitBtnClass, setSubmitBtnClass] = useState("btn_submit");

  const { register, handleSubmit, getValues, setValue, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
      pass1: formValues.password,
      pass2: formValues.password,
      country: formValues.country,
      isMale: formValues.isFemale ? "female" : formValues.isMale ? "male" : "",
      isAgree: formValues.isAgree ? "yes" : "",
      image: {}
    },
    resolver: yupResolver(yupSchemaForHookForm)
  });

  const { errors, isValid } = formState;

  useEffect(() => {
    if (isValid) {
      setSubmitBtnClass("btn_submit");
    } else setSubmitBtnClass("btn_submit_disabled");
  }, [isValid]);

  const submitDataToRedux = (data: Form) => {
    dispatch(
      setForm({
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.pass1,
        country: data.country,
        isMale: data.isMale === "male" ? true : false,
        isFemale: data.isMale === "female" ? true : false,
        isAgree: data.isAgree === "yes" ? true : false
      })
    );
    dispatch(setIsFilled(true));
    dispatch(setIsUncFormUpdate(false));
    dispatch(setIsContFormUpdate(true));
    if (!Object.is(data.image, {})) {
      const image = data.image as Blob[];
      setDataBase(image[0]);
    }
    navigator("/");
  };

  const submitForm: SubmitHandler<Form> = async (data) => {
    try {
      await yupSchemaForHookForm.validate({
        name: data.name,
        age: data.age,
        email: data.email,
        pass1: data.pass1,
        pass2: data.pass2,
        country: data.country,
        isAgree: data.isAgree,
        image: data.image === null ? {} : data.image
      });
      submitDataToRedux(data);
    } catch (e) {
      setSubmitBtnClass("btn_submit_disabled");
    }
  };

  const setDataBase = (img: Blob | null) => {
    if (img) {
      reader.readAsDataURL(img);
      reader.onload = () => {
        dispatch(setDataBase64(reader.result));
      };
    }
  };

  const getCountriesList = () => {
    const value = getValues("country").toLocaleLowerCase().trim();
    if (value !== "") {
      setCountryList(
        countries.filter((country) => country.toLowerCase().startsWith(value))
      );
    }
  };

  const setCountry = (value: string) => {
    setValue("country", value);
  };

  const closeCountryList = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
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
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => submitForm(data as Form))}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        <p className={styles.error_message}>{errors.name?.message}</p>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" {...register("age")} />
        <p className={styles.error_message}>{errors.age?.message}</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <p className={styles.error_message}>{errors.email?.message}</p>
        <label htmlFor="pass1">Password</label>
        <input type="password" id="pass1" {...register("pass1")} />
        <p className={styles.error_message}>{errors.pass1?.message}</p>
        <label htmlFor="pass2">Repeat password</label>
        <input type="password" id="pass2" {...register("pass2")} />
        <p className={styles.error_message}>{errors.pass2?.message}</p>

        <label htmlFor="country">Country</label>
        <div className={styles.country_container}>
          <input
            type="text"
            id="country"
            placeholder="Enter two initial letters for a hint"
            onInput={() => {
              setClueIsVisible(true);
              getCountriesList();
            }}
            {...register("country")}
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
          <p className={styles.error_message}>{errors.country?.message}</p>
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
              value="male"
              defaultChecked
              {...register("isMale")}
            />
          </div>
          <div>
            <label htmlFor="female" className={styles.label_radio}>
              Female
            </label>
            <input
              type="radio"
              id="female"
              value="female"
              {...register("isMale")}
            />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept=".jpg,.png"
          {...register("image")}
        />
        <p className={styles.error_message}>{errors.image?.message}</p>

        <div className={styles.checkbox_container}>
          <label htmlFor="terms" className={styles.label_radio}>
            I accept the terms
          </label>
          <input
            type="checkbox"
            id="terms"
            value="yes"
            {...register("isAgree")}
          />
        </div>
        <p className={styles.error_message}>{errors.isAgree?.message}</p>
        <button className={styles[submitBtnClass]}>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
