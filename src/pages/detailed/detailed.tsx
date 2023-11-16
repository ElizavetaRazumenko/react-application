import { useNavigate, useParams } from 'react-router-dom';
import s from './detailed.module.css';
import { useAppSelector } from '../../hooks/hooks';

const DetailedPage = () => {
  const navigator = useNavigate();
  const { page } = useParams();
  const { detailsContent, isDetailsLoading } = useAppSelector(
    (state) => state.details
  );
  const closeTheDetailsPage = () => {
    navigator(`/pages/${page}`);
  };

  return (
    <div className={s.details_container} data-testid="details_page">
      <div
        className={s.close_button}
        onClick={closeTheDetailsPage}
        data-testid="close_btn"
      ></div>
      <p className={s.details_text_title}>{detailsContent[0]}</p>
      <p className={s.details_text}>{detailsContent[1]}</p>
      <div
        className={isDetailsLoading ? s.loader : s.hidden}
        data-testid="louder"
      ></div>
    </div>
  );
};

export default DetailedPage;
