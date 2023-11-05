import { useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import { MainPagePropsType, resultsItemType } from '../../types/types';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';
import { useNavigate, useParams } from 'react-router-dom';
import ItemRangeChanger from '../../components/itemRangeChanger/itemRangeChanger';
import { sendRequest } from '../../requests/requests';
import { getPagesRange } from '../../utils/utils';

const MainPage = (props: MainPagePropsType) => {
  const { page } = useParams();
  const navigator = useNavigate();
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(currentPage)
  );
  useEffect(() => {
    setCurrentMaxPageRange(getPagesRange(currentPage));
  }, [currentPage]);

  const closeTheDetailsPage = () => {
    if (props.isDetailedPageOpen) navigator(`/pages/${currentPage}`);
  };
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
    <main className={s.main} onClick={closeTheDetailsPage}>
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
        setIsDetailsLoading={props.setIsDetailsLoading}
        setIsDetailsContent={props.setIsDetailsContent}
      />
    </main>
  );
};

export default MainPage;
