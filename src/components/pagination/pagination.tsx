import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchResultItems } from '../../store/async-ac/asyn-ac';
import { getPagesRange } from '../../utils/utils';
import s from './pagination.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const PaginationBlock = () => {
  const { page } = useParams();
  const { paginationCount } = useAppSelector((state) => state.main);
  const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
    getPagesRange(+page!)
  );
  const paginationArray: number[] = new Array(paginationCount).fill(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const maxPagesRange = 10;

  const changePage = (page: number) => {
    const requestValue = localStorage.getItem('Input value') || '';
    dispatch(fetchResultItems(requestValue, page));
    navigate(`/pages/${page}`);
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

  if (paginationCount === 0) {
    return <div className={s.padination_wrapper}></div>;
  }

  return (
    <div className={s.padination_wrapper}>
      <div
        className={`${s.arrow} ${
          currentMaxPageRange < 11 ? s.arrow_left : s.arrow_left_active
        }`}
        onClick={transitionToTheLeftPages}
      ></div>
      {paginationArray.map((_, index) => {
        if (index < currentMaxPageRange && index > currentMaxPageRange - 11) {
          return (
            <div
              className={
                index + 1 === +page!
                  ? s.pagination_item_current
                  : s.pagination_item
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
        className={`${s.arrow} ${
          currentMaxPageRange >= paginationCount
            ? s.arrow_right
            : s.arrow_right_active
        }`}
        onClick={transitionToTheRightPages}
      ></div>
    </div>
  );
};

export default PaginationBlock;
