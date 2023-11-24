import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import Link from 'next/link';
import styles from './artworks.module.scss';
import { useEffect } from 'react';
import { getAllItemsAPI, getSearchItemsAPI } from '@/services/main-serviсe';
import { getArtworksItemsResponse } from '@/types/types';
let stateCurrentPage = 1;
let stateartworksCount = 12;
let stateSearchInputValue = '';

interface PropsTypes {
  data: getArtworksItemsResponse;
}

export const getServerSideProps = async () => {
  console.log(stateartworksCount);
  const { data } =
    stateSearchInputValue === ''
      ? getAllItemsAPI.useFetchResultItemsQuery([
          stateCurrentPage,
          stateartworksCount,
        ])
      : getSearchItemsAPI.useFetchResultItemsQuery([
          stateSearchInputValue,
          `${stateCurrentPage}`,
          `${stateartworksCount}`,
        ]);
  return { props: { data } };
};

const Artworks = ({ data }: PropsTypes) => {
  console.log(data);
  const {
    resultsItemInfo,
    currentPage,
    searchInputValue,
    isMainLoading,
    artworksCount,
  } = useAppSelector((state: { main: MainState }) => state.main);

  useEffect(() => {
    stateCurrentPage = currentPage;
    stateartworksCount = artworksCount;
    stateSearchInputValue = searchInputValue;
  }, [currentPage, artworksCount, searchInputValue]);

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
