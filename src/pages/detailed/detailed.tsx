import { useNavigate, useParams } from 'react-router-dom';
import s from './detailed.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getItemAPI } from '../../services/main-serviсe';
import { useEffect } from 'react';
import {
  setDetailsContent,
  setIsDetailsLoading,
} from '../../store/reducers/details-slice';

const DetailedPage = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const { detailsContent, currentId, isDetailsLoading } = useAppSelector(
    (state) => state.details
  );
  const { data, isLoading, isFetching } =
    getItemAPI.useFetchResultItemsQuery(currentId);
  const closeTheDetailsPage = () => {
    navigator(`/pages/${page}`);
  };
  if (isLoading || isFetching) dispatch(setIsDetailsLoading(true));
  useEffect(() => {
    if (data) {
      const currentItem = data.data;
      dispatch(
        setDetailsContent([currentItem.title, currentItem.thumbnail.alt_text])
      );
      dispatch(setIsDetailsLoading(false));
    }
  }, [data]);

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
