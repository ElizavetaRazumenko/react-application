import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { appContext } from '../../App-context';
import { getItems, searchItems } from '../../requests/requests';
import { SeachResultsPropsType } from '../../types/types';
import s from './search-results.module.css';

const SearchResults = (props: SeachResultsPropsType) => {
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
      context!.setIsDetailsContent([
        currentItem.title,
        currentItem.thumbnail.alt_text,
      ]);
    }
  };

  return (
    <div className={s.results_container}>
      {context!.resultsItemInfo.map((item, index) => (
        <NavLink
          to={`/pages/${props.currentPage}/details/${index + 1}`}
          key={index}
          className={s.card}
          onClick={() => sendDetaitsRequest(props.currentPage, index)}
        >
          <p className={s.title}>{item.title}</p>
          <p className={s.description}>Click for detailed information</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SearchResults;
