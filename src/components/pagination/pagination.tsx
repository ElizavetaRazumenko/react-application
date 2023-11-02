import { ArtworksItem, PaginationPropsType } from '../../types/types';
import s from './pagination.module.css';
import { getItems, searchItems } from '../../requests/requests';

const PaginationBlock = (props: PaginationPropsType) => {
  const paginationArray: number[] = new Array(props.paginationCount).fill(0);

  const sendRequest = async (value: string, pageNumber: number) => {
    props.setIsLoading(true);
    const searchResponse =
      value === ''
        ? await getItems(pageNumber)
        : await searchItems(value, pageNumber);
    props.setIsLoading(false);
    if (searchResponse) {
      const artworks: ArtworksItem[] = searchResponse.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail?.alt_text || 'No description',
      }));
      props.setResultsItemInfo(itemsInfo);
    }
  };

  const changePage = (pageNumber: number) => {
    props.setCurrentPage(pageNumber);
    const requestValue = localStorage.getItem('Input value');
    if (requestValue !== null) sendRequest(requestValue, pageNumber);
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

  if (props.paginationCount === 0) {
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
          props.currentMaxPageRange >= props.paginationCount
            ? s.arrow_right
            : s.arrow_right_active
        }`}
        onClick={transitionToTheRightPages}
      ></div>
    </div>
  );
};

export default PaginationBlock;
