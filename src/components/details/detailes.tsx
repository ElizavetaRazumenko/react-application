import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import router from 'next/router';
import styles from './detailes.module.scss';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { getItemAPI } from '../../services/main-serviсe';
// import { useEffect } from 'react';
// import {
//   setDetailsContent,
//   setIsDetailsLoading,
// } from '../../store/reducers/details-slice';

const DetailedPage = () => {
  const { currentPage, searchInputValue, artworksCount } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );
  // const navigator = useNavigate();
  // const dispatch = useAppDispatch();
  // const { page } = useParams();

  // const { detailsContent, currentId, isDetailsLoading } = useAppSelector(
  //   (state) => state.details
  // );

  // const { data, isLoading, isFetching } =
  //   getItemAPI.useFetchResultItemsQuery(currentId);
  const closeTheDetailsPage = () => {
    router.push(
      `/main/?page=${currentPage}&items_count=${artworksCount}&value=${searchInputValue}`,
    );
  };
  const isDetailsLoading = false; // DELETE
  // if (isLoading || isFetching) dispatch(setIsDetailsLoading(true));

  // useEffect(() => {
  //   if (data) {
  //     const currentItem = data.data;
  //     dispatch(
  //       setDetailsContent([currentItem.title, currentItem.thumbnail.alt_text])
  //     );
  //     dispatch(setIsDetailsLoading(false));
  //   }
  // }, [data]);

  return (
    <div
      className={`${styles.details_container} child`}
      data-testid="details_page"
    >
      <div
        className={styles.close_button}
        onClick={closeTheDetailsPage}
        data-testid="close_btn"
      ></div>
      <p className={styles.details_text_title}>Title</p>
      <p className={styles.details_text}>Description</p>
      <div
        className={isDetailsLoading ? styles.loader : styles.hidden}
        data-testid="louder"
      ></div>
    </div>
  );
};

export default DetailedPage;
