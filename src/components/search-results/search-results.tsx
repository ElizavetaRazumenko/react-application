import { NavLink } from 'react-router-dom';
import { SeachResultsPropsType } from '../../types/types';
import s from './search-results.module.css';

const SearchResults = (props: SeachResultsPropsType) => {
  if (props.isLoading) {
    return <div className={s.loader}></div>;
  }
  return (
    <div className={s.results_container}>
      {props.resultsItemInfo.map((item, index) => (
        <NavLink
          to={`/pages/${props.currentPage}/details/${index + 1}`}
          key={index}
          className={s.card}
        >
          <p className={s.title}>{item.title}</p>
          <p className={s.description}>{item.description}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SearchResults;
