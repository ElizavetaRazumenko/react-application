import styles from './search-bar.module.scss';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  MainState,
  setCurrentPage,
  setSearchInputValue,
} from '@/store/reducers/main-slice';
import router from 'next/router';

const SearchBar = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { artworksCount } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchInputValue(searchInput.current!.value));
    dispatch(setCurrentPage(1));
    router.push(
      `/?page=1&items_count=${artworksCount}&value=${
        searchInput.current!.value
      }`,
      undefined,
      { shallow: true },
    );
  };

  return (
    <form
      className={styles.search_bar}
      onSubmit={submitForm}
      data-testid="form"
    >
      <input
        data-testid="search-input"
        type="text"
        className={styles.search_input}
        placeholder="search"
        ref={searchInput}
      />
      <button className={styles.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
