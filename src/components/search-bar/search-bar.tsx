import styles from './search-bar.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  MainState,
  setCurrentPage,
  setSearchInputValue,
} from '@/store/reducers/main-slice';
import router from 'next/router';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { artworksCount, searchInputValue } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );
  const [inputValue, setInputValue] = useState(searchInputValue);
  useEffect(() => {
    setInputValue(searchInputValue);
  }, [searchInputValue]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchInputValue(inputValue));
    dispatch(setCurrentPage(1));
    router.push(
      `/main/?page=1&items_count=${artworksCount}&value=${inputValue}`,
    );
  };

  return (
    <form
      className={styles.search_bar}
      onSubmit={submitForm}
      data-testid="form"
    >
      <input
        data-testid="search_input"
        type="text"
        className={styles.search_input}
        value={inputValue}
        placeholder="search"
        onInput={(e) => setInputValue(e.currentTarget.value)}
      />
      <button className={styles.search_button} data-testid="button_search">
        search
      </button>
    </form>
  );
};

export default SearchBar;
