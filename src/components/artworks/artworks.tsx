// import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import Link from 'next/link';
import styles from './artworks.module.scss';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import {
//   MainState,
//   setisLoading,
//   setPagesNumber,
//   setResultsItems,
// } from '../../store/reducers/main-slice';
// import { getAllItemsAPI, getSearchItemsAPI } from '../../services/main-serviсe';
// import {
//   setDetailsContent,
//   setDetailsIndex,
//   setIsDetailsOpen,
// } from '../../store/reducers/details-slice';
// import { useEffect } from 'react';
// import { ArtworksItem } from '../../types/types';

const Artworks = () => {
  const { resultsItemInfo, currentPage, searchInputValue, isMainLoading } =
    useAppSelector((state: { main: MainState }) => state.main);
  console.log(searchInputValue);
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

  //   const sendDetaitsRequest = (id: number) => {
  //     dispatch(setIsDetailsOpen(true));
  //     dispatch(setDetailsIndex(id));
  //     dispatch(setDetailsContent(['', '']));
  //   };

  return resultsItemInfo.length ? (
    <>
      <div className={isMainLoading ? styles.loader : styles.hidden}></div>
      <div className={isMainLoading ? styles.hidden : styles.results_container}>
        {resultsItemInfo.map((item, index) => (
          <Link
            href={`/page/${currentPage}/details/${index + 1}`}
            key={index}
            className={styles.card}
            // onClick={() => sendDetaitsRequest(item.id)}
            data-testid="card"
          >
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>Click for detailed information</p>
          </Link>
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
