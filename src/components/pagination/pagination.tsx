import { PaginationPropsType } from '../../types/types';
import s from './pagination.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../../App-context';

const PaginationBlock = (props: PaginationPropsType) => {
  const context = useContext(appContext);
  const paginationArray: number[] = new Array(context!.paginationCount).fill(0);
  const navigate = useNavigate();

  const changePage = (pageNumber: number) => {
    const requestValue = localStorage.getItem('Input value') || '';
    props.sendRequestParams(requestValue, pageNumber);
    navigate(`/pages/${pageNumber}`);
  };

  const transitionToTheLeftPages = () => {
    if (props.currentMaxPageRange > 10) {
      props.setCurrentMaxPageRange(props.currentMaxPageRange - 10);
    }
  };

  const transitionToTheRightPages = () => {
    if (props.currentMaxPageRange < paginationArray.length) {
      props.setCurrentMaxPageRange(props.currentMaxPageRange + 10);
    }
  };

  if (context!.paginationCount === 0) {
    return <div className={s.padination_wrapper}></div>;
  }

  return (
    <div className={s.padination_wrapper}>
      <div
        className={`${s.arrow} ${
          props.currentMaxPageRange < 11 ? s.arrow_left : s.arrow_left_active
        }`}
        onClick={transitionToTheLeftPages}
      ></div>
      {paginationArray.map((_, index) => {
        if (
          index < props.currentMaxPageRange &&
          index > props.currentMaxPageRange - 11
        ) {
          return (
            <div
              className={
                index + 1 === props.currentPage
                  ? s.pagination_item_current
                  : s.pagination_item
              }
              key={index}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </div>
          );
        }
      })}
      <div
        className={`${s.arrow} ${
          props.currentMaxPageRange >= context!.paginationCount
            ? s.arrow_right
            : s.arrow_right_active
        }`}
        onClick={transitionToTheRightPages}
      ></div>
    </div>
  );
};

export default PaginationBlock;
