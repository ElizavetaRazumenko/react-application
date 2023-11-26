import styles from './pagination.module.scss';
import { maxPagesRange } from '../constants';
import router from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  setCurrentMaxPageRange,
  setCurrentPage,
} from '@/store/reducers/main-slice';

const Pagination = () => {
  const dispatch = useAppDispatch();

  const {
    paginationCount,
    currentPage,
    currentMaxPageRange,
    searchInputValue,
    artworksCount,
  } = useAppSelector((state) => state.main);

  // const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
  //   getPagesRange(currentPage),
  // );

  const paginationArray: number[] = new Array(paginationCount).fill(0);

  const changePage = (page: number) => {
    dispatch(setCurrentPage(page));
    router.push(
      `/main/?page=${page}&items_count=${artworksCount}&value=${searchInputValue}`,
    );
  };

  const transitionToTheLeftPages = () => {
    if (currentMaxPageRange > maxPagesRange) {
      dispatch(setCurrentMaxPageRange(currentMaxPageRange - maxPagesRange));
    }
  };

  const transitionToTheRightPages = () => {
    if (currentMaxPageRange < paginationArray.length) {
      dispatch(setCurrentMaxPageRange(currentMaxPageRange + maxPagesRange));
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
