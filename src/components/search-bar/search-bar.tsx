import { useNavigate } from 'react-router-dom';
import s from './search-bar.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setCurrentPage,
  setSearchInputValue,
} from '../../store/reducers/main-slice';
import { useState } from 'react';

const SearchBar = () => {
  const { searchInputValue } = useAppSelector((state) => state.main);
  const [inputValue, setInputValue] = useState(searchInputValue || '');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchInputValue(inputValue));
    dispatch(setCurrentPage(1));
    navigate(`/pages/1`);
    localStorage.setItem('Input value', inputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm} data-testid="form">
      <input
        data-testid="search-input"
        type="text"
        className={s.search_input}
        placeholder="search"
        value={inputValue}
        onInput={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
      <button className={s.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
