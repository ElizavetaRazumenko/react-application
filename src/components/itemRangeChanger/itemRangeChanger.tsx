import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './itemRangeChanger.module.css';
import { ItenRangePropsType } from '../../types/types';

const ItemRangeChanger = (props: ItenRangePropsType) => {
  const navigate = useNavigate();
  const savedItemNumber = Number(localStorage.getItem('Items count'));
  const [currentItemNumber, setCurrentItemNumber] = useState<number>(
    savedItemNumber || 12
  );
  const increaseQuantity = () => {
    if (currentItemNumber < 12) setCurrentItemNumber(currentItemNumber + 1);
  };
  const reduceQuantity = () => {
    if (currentItemNumber > 1) setCurrentItemNumber(currentItemNumber - 1);
  };

  const setItemsCount = async () => {
    localStorage.setItem('Items count', `${currentItemNumber}`);
    const value = localStorage.getItem('Input value') || '';
    props.sendRequestParams(value, 1);
    navigate(`/pages/${1}`);
  };

  return (
    <div className={s.changer_wrapper}>
      <span className={s.title}>change the number of elements:</span>
      <div className={s.arrows_wrapper}>
        <div
          className={`${currentItemNumber < 12 ? s.arrow_active : s.arrow} ${
            s.arrow_top
          }`}
          onClick={increaseQuantity}
        ></div>
        <p className={s.item_number}>{currentItemNumber}</p>
        <div
          className={`${currentItemNumber > 1 ? s.arrow_active : s.arrow} ${
            s.arrow_bottom
          }`}
          onClick={reduceQuantity}
        ></div>
      </div>
      <button className={s.button_install} onClick={setItemsCount}>
        install
      </button>
    </div>
  );
};
export default ItemRangeChanger;
