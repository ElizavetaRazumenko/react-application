import styles from '../styles/404.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.error_container}>
      <p className={styles.content}>Oops! Something went wrong...</p>
      <p className={`${styles.content} ${styles.error_number}`}>404</p>
    </div>
  );
};

export default NotFoundPage;
