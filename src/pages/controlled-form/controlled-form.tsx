import { useState } from "react";
import styles from "./controlled-form.module.css";

const ControlledForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [pass1Value, setPass1Value] = useState("");
  const [pass2Value, setPass2Value] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [maleValue, setMaleValue] = useState(false);
  const [femaleValue, setFemaleValue] = useState(false);
  const [yesValue, setYesValue] = useState(false);
  const [noValue, setNoValue] = useState(false);
  // const [imageValue, setImageValue] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameValue);
    console.log(ageValue);
    console.log(emailValue);
    console.log(pass1Value);
    console.log(pass2Value);
    console.log(countryValue);
    console.log(maleValue);
    console.log(femaleValue);
    console.log(yesValue);
    console.log(noValue);
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onInput={(e) => setNameValue(e.currentTarget.value)}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={ageValue}
          onInput={(e) => setAgeValue(e.currentTarget.value)}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onInput={(e) => setEmailValue(e.currentTarget.value)}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass1">Password</label>
        <input
          type="password"
          id="pass1"
          value={pass1Value}
          onInput={(e) => setPass1Value(e.currentTarget.value)}
        />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass2">Repeat password</label>
        <input
          type="password"
          id="pass2"
          value={pass2Value}
          onInput={(e) => setPass2Value(e.currentTarget.value)}
        />
        <p className={styles.error_message}>Error</p>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={countryValue}
          onInput={(e) => setCountryValue(e.currentTarget.value)}
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
              name="gender"
              value="male"
              checked={maleValue}
              onChange={(e) => setMaleValue(e.currentTarget.checked)}
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
              checked={femaleValue}
              onChange={(e) => setFemaleValue(e.currentTarget.checked)}
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
              checked={yesValue}
              onChange={(e) => setYesValue(e.currentTarget.checked)}
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
              checked={noValue}
              onChange={(e) => setNoValue(e.currentTarget.checked)}
            />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" />

        <button className={styles.btn_submit}>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
