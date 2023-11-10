import { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { appContext } from '../../App-context';
import { getItems, searchItems } from '../../requests/requests';
import s from './search-results.module.css';

const SearchResults = () => {
  const { page } = useParams();
  const context = useContext(appContext);
  if (context!.isLoading) {
    return <div className={s.loader}></div>;
  }

  const sendDetaitsRequest = async (pageNumber: number, index: number) => {
    const requestValue = localStorage.getItem('Input value') || '';
    context!.setIsDetailsLoading(true);
    const searchResponse =
      requestValue === ''
        ? await getItems(pageNumber)
        : await searchItems(requestValue, pageNumber);
    context!.setIsDetailsLoading(false);
    if (searchResponse) {
      const currentItem = searchResponse.data[index];
      context!.setDetailsContent([
        currentItem.title,
        currentItem.thumbnail.alt_text,
      ]);
    }
  };

  if (context!.resultsItemInfo.length === 0) {
    return (
      <div className={s.no_results_message}>
        There are no results for this request
      </div>
    );
  }

  return (
    <div className={s.results_container}>
      {context!.resultsItemInfo.map((item, index) => (
        <NavLink
          to={`/pages/${page}/details/${index + 1}`}
          key={index}
          className={s.card}
          onClick={() => sendDetaitsRequest(+page!, index)}
        >
          <p className={s.title}>{item.title}</p>
          <p className={s.description}>Click for detailed information</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SearchResults;
