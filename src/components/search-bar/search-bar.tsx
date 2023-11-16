import { useNavigate, useParams } from 'react-router-dom';
import s from './search-bar.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchResultItems } from '../../store/async-ac/asyn-ac';
import { setSearchInputValue } from '../../store/reducers/main-slice';

const SearchBar = () => {
  const { searchInputValue } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const defaultPage = 1;

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentPage = Number(page) || defaultPage;
    dispatch(fetchResultItems(searchInputValue, currentPage));
    navigate(`/pages/${page}`);
    localStorage.setItem('Input value', searchInputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm} data-testid="form">
      <input
        data-testid="search-input"
        type="text"
        className={s.search_input}
        placeholder="search"
        value={searchInputValue}
        onInput={(e) => dispatch(setSearchInputValue(e.currentTarget.value))}
      />
      <button className={s.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
