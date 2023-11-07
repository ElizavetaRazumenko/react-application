/* eslint-disable react-hooks/exhaustive-deps */
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
  const navigate = useNavigate();
  const navigator = useNavigate();
  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(+page!)
  );
  useEffect(() => {
    setCurrentMaxPageRange(getPagesRange(+page!));
  }, [page]);

  useEffect(() => {
    sendRequestParams(
      localStorage.getItem('Input value') || '',
      Number(page) || 1
    );
    navigate(`/pages/${page}`);
  }, []);

  const closeTheDetailsPage = () => {
    if (location.pathname.split('/').length === 5) {
      navigator(`/pages/${page}`);
    }
  };
  const sendRequestParams = async (value: string, pageNumber: number) => {
    await sendRequest({
      setIsLoading: context!.setIsLoading,
      setResultsItemInfo: context!.setResultsItemInfo,
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
        currentMaxPageRange={currentMaxPageRange}
        setCurrentMaxPageRange={setCurrentMaxPageRange}
        sendRequestParams={sendRequestParams}
      />
      <ItemRangeChanger sendRequestParams={sendRequestParams} />
      <SearchResults />
    </main>
  );
};

export default MainPage;
