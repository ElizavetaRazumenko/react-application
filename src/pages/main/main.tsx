import { useEffect } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ItemRangeChanger from '../../components/itemRangeChanger/itemRangeChanger';

const MainPage = () => {
  const location = useLocation();
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
