import { useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import { resultsItemType } from '../../types/types';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';

const MainPage = () => {
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const getPagesRange = (currentPage: number) => {
    if (!(currentPage % 10)) {
      return currentPage * 10;
    } else {
      return Math.floor(currentPage / 10 + 1) * 10;
    }
  };
  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(currentPage)
  );
  useEffect(() => {
    setCurrentMaxPageRange(getPagesRange(currentPage));
  }, [currentPage]);
  return (
    <main className={s.main}>
      <p className={s.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar
        setResultsItemInfo={setResultsItemInfo}
        setIsLoading={setIsLoading}
        setPaginationCount={setPaginationCount}
        setCurrentPage={setCurrentPage}
      />
      <PaginationBlock
        paginationCount={paginationCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsLoading={setIsLoading}
        setResultsItemInfo={setResultsItemInfo}
        currentMaxPageRange={currentMaxPageRange}
        setCurrentMaxPageRange={setCurrentMaxPageRange}
      />
      <SearchResults resultsItemInfo={resultsItemInfo} isLoading={isLoading} />
    </main>
  );
};

export default MainPage;
