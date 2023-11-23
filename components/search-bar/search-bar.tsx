// import { useNavigate } from 'react-router-dom';
import styles from './search-bar.module.css';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import {
//   setCurrentPage,
//   setSearchInputValue,
// } from '../../store/reducers/main-slice';
import { useEffect, useRef } from 'react';

const SearchBar = () => {
  useEffect(() => {
    searchInput.current!.value = localStorage.getItem('Input value') || '';
  }, []);
  // const { searchInputValue } = useAppSelector((state) => state.main);
  // const [inputValue, setInputValue] = useState(searchInputValue || '');
  const searchInput = useRef<HTMLInputElement>(null);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchInput.current!.value);
    // dispatch(setSearchInputValue(inputValue));
    // dispatch(setCurrentPage(1));
    // navigate(`/pages/1`);
    localStorage.setItem('Input value', searchInput.current!.value);
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
