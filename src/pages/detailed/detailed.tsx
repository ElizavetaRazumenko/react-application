import { useNavigate, useParams } from 'react-router-dom';
import s from './detailed.module.css';
import { DetailsPagePropsType } from '../../types/types';

const DetailedPage = (props: DetailsPagePropsType) => {
  const navigator = useNavigate();
  const { page } = useParams();
  const closeTheDetailsPage = () => {
    navigator(`/pages/${page}`);
  };
  return (
    <div className={s.details_container}>
      <div className={s.close_button} onClick={closeTheDetailsPage}></div>

      <p className={s.details_text_title}>{props.detailsContent[0]}</p>
      <p className={s.details_text}>{props.detailsContent[1]}</p>
      <div className={props.isDetailsLoading ? s.loader : s.hidden}></div>
    </div>
  );
};

export default DetailedPage;
