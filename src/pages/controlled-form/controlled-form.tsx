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
  isMale: string;
  isAgree: string;
  image: Blob[] | null;
}

const ControlledForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const reader = new FileReader();
  const formValues = useAppSelector((state) => state.controlledForm.formData);

  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
      password1: formValues.password,
      password2: formValues.password,
      country: formValues.country,
      isMale: formValues.isFemale ? "female" : formValues.isMale ? "male" : "",
      isAgree: formValues.isDesagree ? "no" : formValues.isAgree ? "yes" : "",
      image: null,
    },
  });

  const submitForm: SubmitHandler<Form> = (data) => {
    dispatch(
      setForm({
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password1,
        country: data.country,
        isMale: data.isMale === "male" ? true : false,
        isFemale: data.isMale === "female" ? true : false,
        isAgree: data.isAgree === "yes" ? true : false,
        isDesagree: data.isAgree === "no" ? true : false,
      }),
    );
    dispatch(setIsFilled(true));
    setDataBase(data.image && data.image[0]);
    navigator("/");
  };

  const setDataBase = (img: Blob | null) => {
    if (img) {
      reader.readAsDataURL(img);
      reader.onload = () => {
        dispatch(setDataBase64(reader.result));
      };
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register("age")} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass1">Password</label>
        <input type="password" id="pass1" {...register("password1")} />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass2">Repeat password</label>
        <input type="password" id="pass2" {...register("password2")} />
        <p className={styles.error_message}>Error</p>

        <label htmlFor="country">Country</label>
        <input type="text" id="country" {...register("country")} />
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
              {...register("isAgree")}
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

        <button className={styles.btn_submit}>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
