import { useState } from 'react';
import { PaginationPropsType } from '../../types/types';
import s from './pagination.module.css';

const PaginationBlock = (props: PaginationPropsType) => {
  const paginationArray: number[] = new Array(props.paginationCount).fill(0);

  const getPagesRange = (currentPage: number) => {
    if (!(currentPage % 10)) {
      return currentPage * 10;
    } else {
      return Math.floor(currentPage / 10 + 1) * 10;
    }
  };
  const [currentPageRange, setCurrentPageRange] = useState<number>(
    getPagesRange(props.currentPage)
  );

  const changePage = (pageNumber: number) => {
    props.setCurrentPage(pageNumber);
  };
  const transitionToTheLeftPages = () => {
    if (currentPageRange > 10) {
      setCurrentPageRange(currentPageRange - 10);
    }
  };

  const transitionToTheRightPages = () => {
    if (currentPageRange < paginationArray.length) {
      setCurrentPageRange(currentPageRange + 10);
    }
  };

  return (
    <div className={s.padination_wrapper}>
      <div
        className={`${s.arrow} ${
          currentPageRange < 11 ? s.arrow_left : s.arrow_left_active
        }`}
        onClick={transitionToTheLeftPages}
      ></div>
      {paginationArray.map((_, index) => {
        if (index < currentPageRange && index > currentPageRange - 11) {
          return (
            <div
              className={s.pagination_item}
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
          currentPageRange >= props.paginationCount * 10
            ? s.arrow_right
            : s.arrow_right_active
        }`}
        onClick={transitionToTheRightPages}
      ></div>
    </div>
  );
};

export default PaginationBlock;
