import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './pagination.module.scss';
// import { useNavigate } from 'react-router-dom';
// import { setCurrentPage } from '../../store/reducers/main-slice';
import { maxPagesRange } from '../constants';
import { getPagesRange } from '../../utils/utils';
import router from 'next/router';

const Pagination = () => {
  // const { paginationCount, currentPage } = useAppSelector(
  //   (state) => state.main,
  // );

  const currentPage = 1;

  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(currentPage),
  );

  const paginationCount = 250;

  const paginationArray: number[] = new Array(paginationCount).fill(0);

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const changePage = (page: number) => {
    // dispatch(setCurrentPage(page));
    router.push(`/page/${page}`);
  };

  const transitionToTheLeftPages = () => {
    if (currentMaxPageRange > maxPagesRange) {
      setCurrentMaxPageRange(currentMaxPageRange - maxPagesRange);
    }
  };

  const transitionToTheRightPages = () => {
    if (currentMaxPageRange < paginationArray.length) {
      setCurrentMaxPageRange(currentMaxPageRange + maxPagesRange);
    }
  };

  return paginationCount ? (
    <div className={styles.padination_wrapper} data-testid="pagination-block">
      <div
        className={`${styles.arrow} ${
          currentMaxPageRange < 11
            ? styles.arrow_left
            : styles.arrow_left_active
        }`}
        onClick={transitionToTheLeftPages}
      ></div>
      {paginationArray.map((_, index) => {
        if (index < currentMaxPageRange && index > currentMaxPageRange - 11) {
          return (
            <div
              className={
                index + 1 === currentPage
                  ? styles.pagination_item_current
                  : styles.pagination_item
              }
              key={index}
              onClick={() => changePage(index + 1)}
              data-testid="page-number"
            >
              {index + 1}
            </div>
          );
        }
      })}
      <div
        className={`${styles.arrow} ${
          currentMaxPageRange >= paginationCount
            ? styles.arrow_right
            : styles.arrow_right_active
        }`}
        onClick={transitionToTheRightPages}
      ></div>
    </div>
  ) : (
    <div className={styles.padination_wrapper}></div>
  );
};

export default Pagination;
