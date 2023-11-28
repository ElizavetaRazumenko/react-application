import { NavLink } from "react-router-dom";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.links_container}>
      <NavLink to="/controlled-form" className={styles.link}>
        <div className={styles.blue_pill}></div>
      </NavLink>
      <NavLink to="/uncontrolled-form" className={styles.link}>
        <div className={styles.red_pill}></div>
      </NavLink>
    </div>
  );
};

export default Main;
