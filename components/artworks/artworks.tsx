// import { NavLink } from 'react-router-dom';
// import styles from './artworks.module.css';
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

// const SearchResults = () => {
//   const { resultsItemInfo, currentPage, searchInputValue, isMainLoading } =
//     useAppSelector((state: { main: MainState }) => state.main);

//   const itemsCount = localStorage.getItem('Items count')
//     ? +localStorage.getItem('Items count')!
//     : 12;

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

//   return resultsItemInfo.length ? (
//     <>
//       <div className={isMainLoading ? styles.loader : styles.hidden}></div>
//       <div className={isMainLoading ? styles.hidden : styles.results_container}>
//         {resultsItemInfo.map((item, index) => (
//           <NavLink
//             to={`/pages/${currentPage}/details/${index + 1}`}
//             key={index}
//             className={styles.card}
//             onClick={() => sendDetaitsRequest(item.id)}
//             data-testid="card"
//           >
//             <p className={styles.title}>{item.title}</p>
//             <p className={styles.description}>Click for detailed information</p>
//           </NavLink>
//         ))}
//       </div>
//     </>
//   ) : (
//     <div className={styles.no_results_message}>
//       There are no results for this request
//     </div>
//   );
// };

// export default SearchResults;

const Artworks = () => <div>Results will bs HERE</div>;

export default Artworks;
