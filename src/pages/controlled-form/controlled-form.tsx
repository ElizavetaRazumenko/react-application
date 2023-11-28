import styles from "./controlled-form.module.css";

const ControlledForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass1">Password</label>
        <input type="password" id="pass1" />
        <p className={styles.error_message}>Error</p>
        <label htmlFor="pass2">Repeat password</label>
        <input type="password" id="pass2" />
        <p className={styles.error_message}>Error</p>

        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
        <p className={styles.error_message}>Error</p>

        <p className={styles.input_title}>Gender</p>
        <div className={styles.radio_container}>
          <div>
            <label htmlFor="male" className={styles.label_radio}>
              Male
            </label>
            <input type="radio" id="male" name="gender" value="male" />
          </div>
          <div>
            <label htmlFor="female" className={styles.label_radio}>
              Female
            </label>
            <input type="radio" id="female" name="gender" value="female" />
          </div>
        </div>

        <p className={styles.input_title}>I accept the terms</p>
        <div className={styles.radio_container}>
          <div>
            <label htmlFor="terms_yes" className={styles.label_radio}>
              Yes
            </label>
            <input type="radio" id="terms_yes" name="terms" value="yes" />
          </div>
          <div>
            <label htmlFor="terms_no" className={styles.label_radio}>
              No
            </label>
            <input type="radio" id="terms_no" name="terms" value="no" />
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" />

        <button className={styles.btn_submit}>Submit</button>
      </form>

      {/* <NavLink to="/" className={styles.link_back}>
      Go to the main
    </NavLink> */}
    </div>
  );
};

export default ControlledForm;
