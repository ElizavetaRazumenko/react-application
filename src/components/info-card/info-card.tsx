import { ReactFormState } from "../../redux/models";
import styles from "./info-card.module.css";

interface InfoCardProps {
  formData: ReactFormState;
  isFormFilled: boolean;
  base64?: string | ArrayBuffer | null;
}

const InfoCard = (props: InfoCardProps) => {
  return props.isFormFilled ? (
    <div className={styles.card_wrapper}>
      <div className={`${styles.card_info} ${styles.card_controlled}`}>
        <div className={`${styles.info_block} ${styles.info_block_left}`}>
          <p>Name: {props.formData.name}</p>
          <p>Age: {props.formData.age}</p>
          <p>Email: {props.formData.email}</p>
          <p>
            Gender:{" "}
            {props.formData.isMale
              ? "male"
              : props.formData.isFemale
                ? "female"
                : ""}
          </p>
        </div>
        <div className={styles.info_block}>
          <p>Country: {props.formData.country}</p>
          <p>Password: {props.formData.password}</p>
          <p>{props.formData.isAgree ? "Agree with the rules" : ""}</p>
        </div>
      </div>
      <div>
        {props.base64 && (
          <>
            <p className={styles.img_title}>Your picture:</p>
            <img
              src={props.base64 ? (props.base64 as string) : ""}
              alt="youre_picture"
              className={styles.img}
            />
          </>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.no_filled_title}>No filled data</div>
  );
};

export default InfoCard;
