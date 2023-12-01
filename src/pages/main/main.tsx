import { NavLink } from "react-router-dom";
import styles from "./main.module.css";
import InfoCard from "../../components/info-card/info-card";
import { useAppSelector } from "../../redux/hooks/hooks";

const Main = () => {
  const stateControlledForm = useAppSelector((state) => state.controlledForm);
  const stateUncontrolledForm = useAppSelector(
    (state) => state.uncontrolledForm
  );

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
        <InfoCard
          formData={stateControlledForm.formData}
          isFormFilled={stateControlledForm.isFormFilled}
          base64={stateControlledForm.dataBase64}
          isFormUpdate={stateControlledForm.isFormUpdateNow}
        />
        <InfoCard
          formData={stateUncontrolledForm.formData}
          isFormFilled={stateUncontrolledForm.isFormFilled}
          base64={stateUncontrolledForm.dataBase64}
          isFormUpdate={stateUncontrolledForm.isFormUpdateNow}
        />
      </div>
    </div>
  );
};

export default Main;
