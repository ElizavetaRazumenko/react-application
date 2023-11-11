import { useNavigate, useParams } from 'react-router-dom';
import s from './search-bar.module.css';
import { useContext } from 'react';
import { appContext } from '../../App-context';

export interface SearchBarPropsType {
  sendRequestParams: (value: string, pageNumber: number) => void;
}

const SearchBar = (props: SearchBarPropsType) => {
  const context = useContext(appContext);
  const { page } = useParams();
  const navigate = useNavigate();
  const defaultPage = 1;
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.sendRequestParams(
      context!.searchInputValue,
      Number(page) || defaultPage
    );
    navigate(`/pages/${page}`);
    localStorage.setItem('Input value', context!.searchInputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm} data-testid="form">
      <input
        data-testid="search-input"
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
