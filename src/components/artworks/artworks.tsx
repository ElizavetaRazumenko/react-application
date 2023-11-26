import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import styles from './artworks.module.scss';
import { useDispatch } from 'react-redux';
import {
  setDetailsContent,
  setDetailsIndex,
  setIsDetailsOpen,
} from '@/store/reducers/details-slice';
import router from 'next/router';
import { getArtworksItemsResponse } from '@/types/types';

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log(stateartworksCount);
//   const { data } =
//     stateSearchInputValue === ''
//       ? getAllItemsAPI.useFetchResultItemsQuery([
//           stateCurrentPage,
//           stateartworksCount,
//         ])
//       : getSearchItemsAPI.useFetchResultItemsQuery([
//           stateSearchInputValue,
//           `${stateCurrentPage}`,
//           `${stateartworksCount}`,
//         ]);
//   return { props: { data } };
// };

const Artworks = () => {
  const dispatch = useDispatch();
  const { resultsItemInfo, isMainLoading } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );

  //   const { data, isLoading, isFetching } =
  //     searchInputValue === ''
  //       ? getAllItemsAPI.useFetchResultItemsQuery([currentPage, itemsCount])
  //       : getSearchItemsAPI.useFetchResultItemsQuery([
  //           searchInputValue,
  //           `${currentPage}`,
  //           `${itemsCount}`,
  //         ]);

  //   useEffect(() => {
  //     if (data) {
  //       dispatch(setPagesNumber(data.pagination.total_pages));
  //       const artworks: ArtworksItem[] = data.data;
  //       const itemsInfo = artworks.map((artwork) => ({
  //         title: artwork.title,
  //         description: artwork.thumbnail?.alt_text || 'No description',
  //         id: artwork.id,
  //       }));

  //       dispatch(setisLoading(false));
  //       dispatch(setResultsItems(itemsInfo));
  //       if (isLoading || isFetching) dispatch(setisLoading(true));
  //     }
  //   }, [data, isLoading, isFetching]);

  //   const dispatch = useAppDispatch();

  // const sendDetaitsRequest = (id: number) => {
  //   dispatch(setIsDetailsOpen(true));
  //   dispatch(setDetailsIndex(id));
  //   dispatch(setDetailsContent(['', '']));
  // };

  const sendDetaitsRequest = (id: number) => {
    console.log('gara');
    dispatch(setIsDetailsOpen(true));
    dispatch(setDetailsIndex(id));
    dispatch(setDetailsContent(['', '']));
    router.push(`/details/?id=${id}`, undefined, { shallow: true });
  };

  return resultsItemInfo.length ? (
    <>
      <div className={isMainLoading ? styles.loader : styles.hidden}></div>
      <div className={isMainLoading ? styles.hidden : styles.results_container}>
        {resultsItemInfo.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => sendDetaitsRequest(item.id)}
            data-testid="card"
          >
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>Click for detailed information</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className={styles.no_results_message}>
      There are no results for this request
    </div>
  );
};

export default Artworks;
