// import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import { getPagesRange } from "../../utils/utils";
import styles from './pagination.module.css';
// import { useNavigate } from "react-router-dom";
// import { setCurrentPage } from "../../store/reducers/main-slice";
// import { maxPagesRange } from "../constants";

// const PaginationBlock = () => {
//   const { paginationCount, currentPage } = useAppSelector(
//     (state) => state.main,
//   );

//   const [currentMaxPageRange, setCurrentMaxPageRange] = useState<number>(
//     getPagesRange(currentPage),
//   );

//   const paginationArray: number[] = new Array(paginationCount).fill(0);

//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const changePage = (page: number) => {
//     dispatch(setCurrentPage(page));
//     navigate(`/pages/${page}`);
//   };

//   const transitionToTheLeftPages = () => {
//     if (currentMaxPageRange > maxPagesRange) {
//       setCurrentMaxPageRange(currentMaxPageRange - maxPagesRange);
//     }
//   };

//   const transitionToTheRightPages = () => {
//     if (currentMaxPageRange < paginationArray.length) {
//       setCurrentMaxPageRange(currentMaxPageRange + maxPagesRange);
//     }
//   };

//   return paginationCount ? (
//     <div className={s.padination_wrapper} data-testid="pagination-block">
//       <div
//         className={`${s.arrow} ${
//           currentMaxPageRange < 11 ? s.arrow_left : s.arrow_left_active
//         }`}
//         onClick={transitionToTheLeftPages}
//       ></div>
//       {paginationArray.map((_, index) => {
//         if (index < currentMaxPageRange && index > currentMaxPageRange - 11) {
//           return (
//             <div
//               className={
//                 index + 1 === currentPage
//                   ? s.pagination_item_current
//                   : s.pagination_item
//               }
//               key={index}
//               onClick={() => changePage(index + 1)}
//               data-testid="page-number"
//             >
//               {index + 1}
//             </div>
//           );
//         }
//       })}
//       <div
//         className={`${s.arrow} ${
//           currentMaxPageRange >= paginationCount
//             ? s.arrow_right
//             : s.arrow_right_active
//         }`}
//         onClick={transitionToTheRightPages}
//       ></div>
//     </div>
//   ) : (
//     <div className={s.padination_wrapper}></div>
//   );
// };

// export default PaginationBlock;

const Pagination = () => {
  return <div className={styles.div}>Pagination wiil be here</div>;
};

export default Pagination;
