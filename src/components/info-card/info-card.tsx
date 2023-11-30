import styles from "./info-card.module.css";

const InfoCard = () => {
  return (
    <div className={`${styles.card_info} ${styles.card_controlled}`}>
      <div className={styles.info_block}>
        <p>Name: {"not filled"}</p>
        <p>Age: {"not filled"}</p>
        <p>Email: {"not filled"}</p>
        <p>Gender: {"not filled"}</p>
      </div>
      <div className={styles.info_block}>
        <p>Country: {"not filled"}</p>
        <p>Image: {"not filled"}</p>
        <p>Password: {"not filled"}</p>
      </div>
    </div>
  );
};

export default InfoCard;
