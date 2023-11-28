import { NavLink } from "react-router-dom";
import styles from "./uncontrolled-form.module.css";

const UncontrolledForm = () => {
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="pass1">Password</label>
        <input type="password" id="pass1" />
        <label htmlFor="pass2">Repeat password</label>
        <input type="password" id="pass2" />

        <p>Gender</p>
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" />
        </div>

        <p>I accept the terms</p>
        <div>
          <label htmlFor="terms_yes">Yes</label>
          <input type="radio" id="terms_yes" name="terms" value="yes" />
          <label htmlFor="terms_no">No</label>
          <input type="radio" id="terms_no" name="terms" value="no" />
        </div>

        <label htmlFor="image">Image</label>
        <input type="image" id="image" />

        <label htmlFor="country">Country</label>
        <input type="text" id="country" />

        <button>Submit</button>
      </form>

      <NavLink to="/">Go to the main</NavLink>
    </>
  );
};

export default UncontrolledForm;
