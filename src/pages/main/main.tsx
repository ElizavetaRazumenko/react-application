import { NavLink } from "react-router-dom";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.links_container}>
        <NavLink to="/react-hook-form" className={styles.link}>
          <p className={styles.link_title}>To React Hook Form</p>
          <div className={styles.blue_pill}></div>
        </NavLink>
        <NavLink to="/uncontrolled-form" className={styles.link}>
          <p className={styles.link_title}>To Uncontrolled Form</p>
          <div className={styles.red_pill}></div>
        </NavLink>
      </div>

      <div className={styles.cards_info}>
        <div className={styles.card_info}>
          <p>Name: {"not filled"}</p>
          <p>Age: {"not filled"}</p>
          <p>Email: {"not filled"}</p>
          <p>Password: {"not filled"}</p>
          <p>Gender: {"not filled"}</p>
          <p>Image: {"not filled"}</p>
          <p>Country: {"not filled"}</p>
        </div>
        <div className={styles.card_info}>
          <p>Name: {"not filled"}</p>
          <p>Age: {"not filled"}</p>
          <p>Email: {"not filled"}</p>
          <p>Password: {"not filled"}</p>
          <p>Gender: {"not filled"}</p>
          <p>Image: {"not filled"}</p>
          <p>Country: {"not filled"}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
