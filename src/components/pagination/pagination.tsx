import s from './pagination.module.css';

const PaginationBlock = () => {
  return (
    <div className={s.padination_wrapper}>
      <div className={s.pagination_item}>1</div>
      <div className={s.pagination_item}>2</div>
      <div className={s.pagination_item}>3</div>
    </div>
  );
};

export default PaginationBlock;
