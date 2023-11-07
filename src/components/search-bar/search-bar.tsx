import { useNavigate, useParams } from 'react-router-dom';
import { SearchBarPropsType } from '../../types/types';
import s from './search-bar.module.css';
import { useState } from 'react';

const SearchBar = (props: SearchBarPropsType) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.sendRequestParams(inputValue, Number(page) || 1);
    navigate(`/pages/${page}`);
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
