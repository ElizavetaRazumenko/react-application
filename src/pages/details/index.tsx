import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  getArtworkItem,
  getArtworkItems,
  getSearchArtworkItems,
} from '@/services/main-serviсe';
import {
  DetailsState,
  setDetailsContent,
} from '@/store/reducers/details-slice';
import { MainState } from '@/store/reducers/main-slice';
import { wrapper } from '@/store/store';
import { ArtworkDetails, getArtworksItemsResponse } from '@/types/types';
import router from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/detailes.module.scss';
import Main from '../main';
interface DetailsProps {
  dataMain: getArtworksItemsResponse | undefined;
  dataDetails: ArtworkDetails | undefined;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const {
      value = '',
      items_count = '12',
      page = '1',
      id = '3752',
    } = context.query;
    let dataMain;
    let dataDetails;

    if (
      typeof value === 'string' &&
      typeof items_count === 'string' &&
      typeof page === 'string'
    ) {
      dataMain =
        value === ''
          ? await store.dispatch(
              getArtworkItems.initiate([Number(page), Number(items_count)]),
            )
          : await store.dispatch(
              getSearchArtworkItems.initiate([
                `${value}`,
                `${page}`,
                `${items_count}`,
              ]),
            );
    }

    if (typeof id === 'string') {
      dataDetails = await store.dispatch(getArtworkItem.initiate(+id));
    }

    return {
      props: { dataMain: dataMain?.data, dataDetails: dataDetails?.data },
    };
  },
);

const DetailedPage = ({ dataMain, dataDetails }: DetailsProps) => {
  const { currentPage, searchInputValue, artworksCount } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );

  const { detailsContent } = useAppSelector(
    (state: { details: DetailsState }) => state.details,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataDetails) {
      const currentArtwork = dataDetails.data;
      dispatch(
        setDetailsContent([
          currentArtwork.title,
          currentArtwork.thumbnail.alt_text,
        ]),
      );
    }
  }, [dataDetails]);

  const closeTheDetailsPage = () => {
    router.push(
      `/main/?page=${currentPage}&items_count=${artworksCount}&value=${searchInputValue}`,
    );
  };

  const closeTheDetailsPageOnMain = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;
    const element = target.closest('.child');
    if (!element) {
      router.push(
        `/main/?page=${currentPage}&items_count=${artworksCount}&value=${searchInputValue}`,
      );
    }
  };

  return (
    <div
      className={styles.wrapper}
      onClick={(e) => closeTheDetailsPageOnMain(e)}
    >
      <Main data={dataMain} />
      <div
        className={`${styles.details_container} child`}
        data-testid="details_page"
      >
        <div
          className={styles.close_button}
          onClick={closeTheDetailsPage}
          data-testid="close_btn"
        ></div>
        <p className={styles.details_text_title}>Title: {detailsContent[0]}</p>
        <p className={styles.details_text}>Description: {detailsContent[1]}</p>
      </div>
    </div>
  );
};

export default DetailedPage;
