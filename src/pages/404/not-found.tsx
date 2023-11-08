import s from './not-found.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.error_container}>
      <p className={s.content}>Oops! Something went wrong</p>
      <p className={`${s.content} ${s.error_number}`}>404</p>
    </div>
  );
};

export default NotFoundPage;
