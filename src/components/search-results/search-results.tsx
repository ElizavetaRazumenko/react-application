import { NavLink, useParams } from 'react-router-dom';
import s from './search-results.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  MainState,
  setPagesNumber,
  setResultsItems,
} from '../../store/reducers/main-slice';
import { getAllItemsAPI, getSearchItemsAPI } from '../../services/main-serviсe';
import { setDetailsIndex } from '../../store/reducers/details-slice';
import { useEffect } from 'react';
import { ArtworksItem } from '../../types/types';

const SearchResults = () => {
  const { page } = useParams();
  const { currentPage, searchInputValue } = useAppSelector(
    (state: { main: MainState }) => state.main
  );
  const itemsCount = Number(localStorage.getItem('Items count'));
  const { data, isLoading, isFetching } =
    searchInputValue === ''
      ? getAllItemsAPI.useFetchResultItemsQuery([currentPage, itemsCount || 12])
      : getSearchItemsAPI.useFetchResultItemsQuery([
          searchInputValue,
          `${currentPage}`,
          `${itemsCount}` || '12',
        ]);
  useEffect(() => {
    if (data) {
      dispatch(setPagesNumber(data.pagination.total_pages));
      const artworks: ArtworksItem[] = data.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail?.alt_text || 'No description',
      }));
      dispatch(setResultsItems(itemsInfo));
    }
  }, [data]);

  const dispatch = useAppDispatch();
  if (isLoading || isFetching) {
    return <div className={s.loader}></div>;
  }

  const sendDetaitsRequest = (index: number) => {
    dispatch(setDetailsIndex(index));
  };

  if (data && data.data.length === 0) {
    return (
      <div className={s.no_results_message}>
        There are no results for this request
      </div>
    );
  }

  return (
    <div className={s.results_container}>
      {data &&
        data.data.map((item, index) => (
          <NavLink
            to={`/pages/${page}/details/${index + 1}`}
            key={index}
            className={s.card}
            onClick={() => sendDetaitsRequest(item.id)}
            data-testid="card"
          >
            <p className={s.title}>{item.title}</p>
            <p className={s.description}>Click for detailed information</p>
          </NavLink>
        ))}
    </div>
  );
};

export default SearchResults;
