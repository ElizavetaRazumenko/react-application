import { useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import { resultsItemType } from '../../types/types';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';
import { useParams } from 'react-router-dom';
import ItemRangeChanger from '../../components/itemRangeChanger/itemRangeChanger';
import { sendRequest } from '../../requests/requests';

const MainPage = () => {
  const { page } = useParams();
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  const getPagesRange = (currentPage: number) => {
    if (!(currentPage % 10)) {
      return currentPage;
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

  const sendRequestParams = async (value: string, pageNumber: number) => {
    await sendRequest({
      setIsLoading,
      setResultsItemInfo,
      setCurrentPage,
      setPaginationCount,
      value,
      pageNumber,
    });
  };
  return (
    <main className={s.main}>
      <p className={s.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar sendRequestParams={sendRequestParams} />
      <PaginationBlock
        paginationCount={paginationCount}
        currentPage={currentPage}
        currentMaxPageRange={currentMaxPageRange}
        setCurrentMaxPageRange={setCurrentMaxPageRange}
        sendRequestParams={sendRequestParams}
      />
      <ItemRangeChanger sendRequestParams={sendRequestParams} />
      <SearchResults
        resultsItemInfo={resultsItemInfo}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </main>
  );
};

export default MainPage;
