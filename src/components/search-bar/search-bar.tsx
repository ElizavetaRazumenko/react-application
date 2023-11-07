import { useNavigate, useParams } from 'react-router-dom';
import { SearchBarPropsType } from '../../types/types';
import s from './search-bar.module.css';
import { useContext } from 'react';
import { appContext } from '../../App-context';

const SearchBar = (props: SearchBarPropsType) => {
  const context = useContext(appContext);
  const { page } = useParams();
  const navigate = useNavigate();
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.sendRequestParams(context!.searchInputValue, Number(page) || 1);
    navigate(`/pages/${page}`);
    localStorage.setItem('Input value', context!.searchInputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm}>
      <input
        type="text"
        className={s.search_input}
        placeholder="search"
        value={context!.searchInputValue}
        onChange={(e) => context!.setSearchInputValue(e.target.value)}
      />
      <button className={s.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
