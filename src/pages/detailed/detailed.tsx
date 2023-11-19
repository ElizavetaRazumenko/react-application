import { useNavigate, useParams } from 'react-router-dom';
import s from './detailed.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getItemAPI } from '../../services/main-serviсe';
import { useEffect } from 'react';
import { setDetailsContent } from '../../store/reducers/details-slice';

const DetailedPage = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const { detailsContent, currentId } = useAppSelector(
    (state) => state.details
  );
  const { data, isLoading, isFetching } =
    getItemAPI.useFetchResultItemsQuery(currentId);
  console.log(data);
  const closeTheDetailsPage = () => {
    navigator(`/pages/${page}`);
  };

  useEffect(() => {
    if (data) {
      const currentItem = data.data;
      dispatch(
        setDetailsContent([currentItem.title, currentItem.thumbnail.alt_text])
      );
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
        className={isLoading || isFetching ? s.loader : s.hidden}
        data-testid="louder"
      ></div>
    </div>
  );
};

export default DetailedPage;
