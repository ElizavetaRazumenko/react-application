import { useContext, useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import ErrorButton from '../../components/error-button/error-button';
import PaginationBlock from '../../components/pagination/pagination';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ItemRangeChanger from '../../components/itemRangeChanger/itemRangeChanger';
import { sendRequest } from '../../requests/requests';
import { getPagesRange } from '../../utils/utils';
import { appContext } from '../../App-context';

const MainPage = () => {
  const context = useContext(appContext);
  const location = useLocation();
  const { page } = useParams();
  const navigator = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(currentPage)
  );
  useEffect(() => {
    setCurrentMaxPageRange(getPagesRange(currentPage));
  }, [currentPage]);

  const closeTheDetailsPage = () => {
    if (location.pathname.split('/').length === 5) {
      navigator(`/pages/${currentPage}`);
    }
  };
  const sendRequestParams = async (value: string, pageNumber: number) => {
    await sendRequest({
      setIsLoading: context!.setIsLoading,
      setResultsItemInfo: context!.setResultsItemInfo,
      setCurrentPage,
      setPaginationCount: context!.setPaginationCount,
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
        currentPage={currentPage}
        currentMaxPageRange={currentMaxPageRange}
        setCurrentMaxPageRange={setCurrentMaxPageRange}
        sendRequestParams={sendRequestParams}
      />
      <ItemRangeChanger sendRequestParams={sendRequestParams} />
      <SearchResults currentPage={currentPage} />
    </main>
  );
};

export default MainPage;
