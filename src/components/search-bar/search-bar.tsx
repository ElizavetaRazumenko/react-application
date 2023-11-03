/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { SearchBarPropsType } from '../../types/types';
import s from './search-bar.module.css';
import { useEffect, useState } from 'react';

const SearchBar = (props: SearchBarPropsType) => {
  useEffect(() => {
    getSearchItems();
  }, []);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const sendRequest = (value: string) => {
    props.sendRequestParams(value, 1);
    navigate(`/pages/${1}`);
  };

  const getSearchItems = async () => {
    sendRequest(localStorage.getItem('Input value') || '');
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendRequest(inputValue);
    localStorage.setItem('Input value', inputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm}>
      <input
        type="text"
        className={s.search_input}
        placeholder="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={s.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
