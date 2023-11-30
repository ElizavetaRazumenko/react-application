import { ReactFormState } from "../../redux/models";
import styles from "./info-card.module.css";

const InfoCard = (props: ReactFormState) => {
  return props.isFilled ? (
    <div className={`${styles.card_info} ${styles.card_controlled}`}>
      <div className={`${styles.info_block} ${styles.info_block_left}`}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        <p>Gender: {props.isMale ? "male" : "female"}</p>
      </div>
      <div className={styles.info_block}>
        <p>Country: {props.country}</p>
        <p>Image: {props.image}</p>
        <p>Password: {props.password}</p>
        <p>
          {props.isAgree ? "Agree with the rules" : "Disagree with the rules"}
        </p>
      </div>
    </div>
  ) : (
    <div className={styles.no_filled_title}>No filled data</div>
  );
};

export default InfoCard;
