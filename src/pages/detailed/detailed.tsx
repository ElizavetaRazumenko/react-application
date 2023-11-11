import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { appContext } from '../../App-context';
import s from './detailed.module.css';

const DetailedPage = () => {
  const context = useContext(appContext);
  const navigator = useNavigate();
  const { page } = useParams();
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
      <p className={s.details_text_title}>{context!.detailsContent[0]}</p>
      <p className={s.details_text}>{context!.detailsContent[1]}</p>
      <div className={context!.isDetailsLoading ? s.loader : s.hidden}></div>
    </div>
  );
};

export default DetailedPage;
