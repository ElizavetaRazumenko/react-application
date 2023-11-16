/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ItemRangeChanger from '../../components/itemRangeChanger/itemRangeChanger';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchResultItems } from '../../store/async-ac/asyn-ac';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { page } = useParams();
  const navigate = useNavigate();
  const defaultPage = 1;

  useEffect(() => {
    const inputValue = localStorage.getItem('Input value') || '';
    const currentPage = Number(page) || defaultPage;
    dispatch(fetchResultItems(inputValue, currentPage));
    navigate(`/pages/${page}`);
  }, []);

  const closeTheDetailsPage = () => {
    if (location.pathname.split('/').length === 5) {
      navigate(`/pages/${page}`);
    }
  };
  return (
    <main className={s.main} onClick={closeTheDetailsPage} data-testid="main">
      <p className={s.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar />
      <PaginationBlock />
      <ItemRangeChanger />
      <SearchResults />
    </main>
  );
};

export default MainPage;
