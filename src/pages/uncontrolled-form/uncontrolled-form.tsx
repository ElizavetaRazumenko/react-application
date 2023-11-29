// import { NavLink } from "react-router-dom";
import { useRef } from "react";
import styles from "./uncontrolled-form.module.css";

const UncontrolledForm = () => {
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

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameRef.current!.value);
    console.log(ageRef.current!.value);
    console.log(email.current!.value);
    console.log(pass1.current!.value);
    console.log(pass2.current!.value);
    console.log(country.current!.value);
    console.log(male.current!.checked);
    console.log(female.current!.checked);
    console.log(yes.current!.checked);
    console.log(no.current!.checked);
    console.log(image.current!.files);
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
