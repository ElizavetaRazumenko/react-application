import { useState } from "react";
import styles from "./controlled-form.module.css";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useDispatch } from "react-redux";
import {
  setDataBase64,
  setForm,
  setIsFilled,
} from "../../redux/reducers/controlled-form-slice";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

interface Form {
  name: string;
  age: number;
  email: string;
  password1: string;
  password2: string;
  country: string;
  isMale: boolean;
  isFemale: boolean;
  isAgree: boolean;
  isDesagree: boolean;
}

const ControlledForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const reader = new FileReader();
  const formValues = useAppSelector((state) => state.controlledForm.formData);
  const stringBase64 = useAppSelector(
    (state) => state.controlledForm.dataBase64,
  );

  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
      password1: formValues.password,
      password2: formValues.password,
      country: formValues.country,
      isMale: formValues.isMale,
      isAgree: formValues.isAgree,
    },
  });

  const [nameValue, setNameValue] = useState(formValues.name);
  const [ageValue, setAgeValue] = useState(formValues.age);
  const [emailValue, setEmailValue] = useState(formValues.email);
  const [pass1Value, setPass1Value] = useState(formValues.password);
  const [pass2Value, setPass2Value] = useState(formValues.password);
  const [countryValue, setCountryValue] = useState(formValues.country);
  const [isMaleValue, setIsMaleValue] = useState(formValues.isMale);
  const [isFemaleValue, setIsFemaleValue] = useState(formValues.isFemale);
  const [isAgreeValue, setIsAgreeValue] = useState(formValues.isAgree);
  const [isDisagreeValue, setIsDisagreeValue] = useState(formValues.isDesagree);
  const [img64, setImg64] = useState(stringBase64 as string);

  const submitForm: SubmitHandler<Form> = async (data) => {
    console.log(data);
    // dispatch(
    //   setForm({
    //     name: nameValue,
    //     age: ageValue,
    //     email: emailValue,
    //     password: pass1Value,
    //     country: countryValue,
    //     isMale: isMaleValue,
    //     isFemale: isFemaleValue,
    //     isAgree: isAgreeValue,
    //     isDesagree: isDisagreeValue,
    //   }),
    // );
    // dispatch(setIsFilled(true));
    // dispatch(setDataBase64(img64));
    // navigator("/");
  };

  const setDataBase = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImg64(reader.result as string);
      };
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onInput={(e) => setNameValue(e.currentTarget.value)}
          {...register("name")}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={ageValue}
          onInput={(e) => setAgeValue(+e.currentTarget.value)}
          {...register("age")}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onInput={(e) => setEmailValue(e.currentTarget.value)}
          {...register("email")}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass1">Password</label>
        <input
          type="password"
          id="pass1"
          value={pass1Value}
          onInput={(e) => setPass1Value(e.currentTarget.value)}
          {...register("password1")}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass2">Repeat password</label>
        <input
          type="password"
          id="pass2"
          value={pass2Value}
          onInput={(e) => setPass2Value(e.currentTarget.value)}
          {...register("password2")}
        />
        <p className={styles.error_message}>Error</p>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={countryValue}
          onInput={(e) => setCountryValue(e.currentTarget.value)}
          {...register("country")}
        />
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
              value="male"
              checked={isMaleValue}
              // onChange={(e) => setIsMaleValue(e.currentTarget.checked)}
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
              checked={isFemaleValue}
              // onChange={(e) => setIsFemaleValue(e.currentTarget.checked)}
              {...register("isMale")}
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
              value="yes"
              checked={isAgreeValue}
              // onChange={(e) => setIsAgreeValue(e.currentTarget.checked)}
              {...register("isAgree")}
            />
          </div>
          <div>
            <label htmlFor="terms_no" className={styles.label_radio}>
              No
            </label>
            <input
              type="radio"
              id="terms_no"
              value="no"
              checked={isDisagreeValue}
              // onChange={(e) => setIsDisagreeValue(e.currentTarget.checked)}
              {...register("isAgree")}
            />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept=".jpg,.png"
          onChange={setDataBase}
        />

        <button className={styles.btn_submit}>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
