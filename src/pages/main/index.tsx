import Artworks from '@/components/artworks/artworks';
import ErrorButton from '@/components/error-button/error-button';
import ItemChanger from '@/components/items-changer/item-changer';
import Pagination from '@/components/pagination/pagination';
import SearchBar from '@/components/search-bar/search-bar';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  getArtworkItems,
  getSearchArtworkItems,
} from '@/services/main-serviсe';
import {
  setCurrentMaxPageRange,
  setPagesNumber,
  setResultsItems,
} from '@/store/reducers/main-slice';
import { wrapper } from '@/store/store';
import { getArtworksItemsResponse } from '@/types/types';
import { getPagesRange } from '@/utils/utils';
import { useEffect } from 'react';
import styles from '../../styles/page.module.scss';

interface MainProps {
  data: getArtworksItemsResponse | undefined;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { value = '', items_count = '12', page = '1' } = context.query || {};
    let data;
    if (
      typeof value === 'string' &&
      typeof items_count === 'string' &&
      typeof page === 'string'
    ) {
      data =
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

    return { props: { data: data?.data } };
  },
);

const Main = ({ data }: MainProps) => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.main);
  useEffect(() => {
    if (data) {
      const artworks = data.data.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail?.alt_text || 'No description',
        id: artwork.id,
      }));
      dispatch(setPagesNumber(data.pagination.total_pages));
      dispatch(setCurrentMaxPageRange(getPagesRange(currentPage)));
      dispatch(setResultsItems(artworks));
    }
  }, [data]);

  return (
    <main className={styles.main} data-testid="main">
      <p className={styles.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar />
      <Pagination />
      <ItemChanger />
      <Artworks />
    </main>
  );
};

export default Main;
