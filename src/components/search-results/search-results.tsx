import { NavLink, useParams } from 'react-router-dom';
import s from './search-results.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchResultDetails } from '../../store/async-ac/asyn-ac';

const SearchResults = () => {
  const { page } = useParams();
  const { isLoading } = useAppSelector((state) => state.main);
  const { resultsItemInfo } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return <div className={s.loader}></div>;
  }

  const sendDetaitsRequest = async (page: number, index: number) => {
    const requestValue = localStorage.getItem('Input value') || '';
    dispatch(fetchResultDetails(requestValue, page, index));
  };

  if (resultsItemInfo.length === 0) {
    return (
      <div className={s.no_results_message}>
        There are no results for this request
      </div>
    );
  }

  return (
    <div className={s.results_container}>
      {resultsItemInfo.map((item, index) => (
        <NavLink
          to={`/pages/${page}/details/${index + 1}`}
          key={index}
          className={s.card}
          onClick={() => sendDetaitsRequest(+page!, index)}
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
