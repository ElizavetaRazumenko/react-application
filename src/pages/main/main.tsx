import { useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import { resultsItemType } from '../../types/types';
import ErrorButton from '../../components/error-button/error-button';

const MainPage = () => {
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <main className={s.main}>
      <p className={s.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar
        setResultsItemInfo={setResultsItemInfo}
        setIsLoading={setIsLoading}
      />
      <SearchResults resultsItemInfo={resultsItemInfo} isLoading={isLoading} />
    </main>
  );
};

export default MainPage;
