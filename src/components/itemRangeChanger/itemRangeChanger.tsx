import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultCardsNumber, defaultPage, minCardsNumber } from '../constants';
import s from './itemRangeChanger.module.css';

const ItemRangeChanger = () => {
  const navigate = useNavigate();

  const savedItemNumber = Number(localStorage.getItem('Items count'));

  const [currentItemNumber, setCurrentItemNumber] = useState<number>(
    savedItemNumber || defaultCardsNumber
  );

  const increaseQuantity = () => {
    if (currentItemNumber < defaultCardsNumber) {
      setCurrentItemNumber(currentItemNumber + 1);
    }
  };

  const reduceQuantity = () => {
    if (currentItemNumber > minCardsNumber) {
      setCurrentItemNumber(currentItemNumber - 1);
    }
  };

  const setItemsCount = async () => {
    localStorage.setItem('Items count', `${currentItemNumber}`);
    navigate(`/pages/${defaultPage}`);
  };

  return (
    <div className={s.changer_wrapper} data-testid="range-changer-container">
      <span className={s.title}>change the number of elements:</span>
      <div className={s.arrows_wrapper}>
        <div
          className={`${currentItemNumber < 12 ? s.arrow_active : s.arrow} ${
            s.arrow_top
          }`}
          onClick={increaseQuantity}
        ></div>
        <p className={s.item_number} data-testid="elements_number">
          {currentItemNumber}
        </p>
        <div
          className={`${currentItemNumber > 1 ? s.arrow_active : s.arrow} ${
            s.arrow_bottom
          }`}
          onClick={reduceQuantity}
        ></div>
      </div>
      <button
        className={s.button_install}
        onClick={setItemsCount}
        data-testid="button_install"
      >
        install
      </button>
    </div>
  );
};
export default ItemRangeChanger;
