import Artworks from '@/components/artworks/artworks';
import ErrorButton from '@/components/error-button/error-button';
import ItemChanger from '@/components/items-changer/item-changer';
import Pagination from '@/components/pagination/pagination';
import SearchBar from '@/components/search-bar/search-bar';
import {
  getArtworkItems,
  getRunningQueriesThunk,
  getSearchArtworkItems,
} from '@/services/main-serviсe';
import { wrapper } from '@/store/store';
import { getArtworksItemsResponse } from '@/types/types';
import { NextPage } from 'next';
import styles from '../../styles/page.module.scss';

// export const getServerSideProps = async (context: {
//   query: { searchValue: string; items_count: string; page: string };
// }) => {
//   const { searchValue, items_count, page } = context.query;
//   const { data } =
//     searchValue === ''
//       ? getAllItemsAPI.useFetchResultItemsQuery([
//           Number(page),
//           Number(items_count),
//         ])
//       : getSearchItemsAPI.useFetchResultItemsQuery([
//           `${searchValue}`,
//           `${page}`,
//           `${items_count}`,
//         ]);

//   return { props: { data } };
// };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { searchValue, items_count, page } = context.query;
    searchValue === ''
      ? store.dispatch(
          getArtworkItems.initiate([Number(page), Number(items_count)]),
        )
      : store.dispatch(
          getSearchArtworkItems.initiate([
            `${searchValue || ''}`,
            `${page}`,
            `${items_count}`,
          ]),
        );
    const data = await Promise.all(store.dispatch(getRunningQueriesThunk()));
    console.log(data);
    return { props: {} };
  },
);

const Main: NextPage<getArtworksItemsResponse> = () => {
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
