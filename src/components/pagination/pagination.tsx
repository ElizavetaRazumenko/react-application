import s from './pagination.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../../App-context';
export interface PaginationPropsType {
  currentMaxPageRange: number;
  setCurrentMaxPageRange: React.Dispatch<React.SetStateAction<number>>;
  sendRequestParams: (value: string, pageNumber: number) => void;
}

const PaginationBlock = (props: PaginationPropsType) => {
  const context = useContext(appContext);
  const { page } = useParams();
  const paginationArray: number[] = new Array(context!.paginationCount).fill(0);
  const navigate = useNavigate();
  const maxPagesRange = 10;

  const changePage = (pageNumber: number) => {
    const requestValue = localStorage.getItem('Input value') || '';
    props.sendRequestParams(requestValue, pageNumber);
    navigate(`/pages/${pageNumber}`);
  };

  const transitionToTheLeftPages = () => {
    if (props.currentMaxPageRange > maxPagesRange) {
      props.setCurrentMaxPageRange(props.currentMaxPageRange - maxPagesRange);
    }
  };

  const transitionToTheRightPages = () => {
    if (props.currentMaxPageRange < paginationArray.length) {
      props.setCurrentMaxPageRange(props.currentMaxPageRange + maxPagesRange);
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
