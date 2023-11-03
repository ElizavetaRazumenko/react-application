import { useNavigate, useParams } from 'react-router-dom';
import s from './detailed.module.css';
import { useState } from 'react';
const DetailedPage = () => {
  const navigator = useNavigate();
  const [isLoading] = useState(false);
  const { page } = useParams();
  const closeTheDetailsPage = () => {
    navigator(`/pages/${page}`);
  };
  return (
    <div className={s.details_container}>
      <div className={s.details_header}>
        <p>Detailed information</p>
        <div className={s.close_button} onClick={closeTheDetailsPage}></div>
      </div>
      <div className={isLoading ? s.loader : s.hidden}></div>
    </div>
  );
};

export default DetailedPage;
