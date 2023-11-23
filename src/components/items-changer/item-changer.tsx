import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { defaultCardsNumber, defaultPage, minCardsNumber } from '../constants';
import styles from './item-changer.module.scss';

const ItemChanger = () => {
  // const navigate = useNavigate();

  // const savedItemNumber = Number(localStorage.getItem('Items count'));

  // const [currentItemNumber, setCurrentItemNumber] = useState<number>(
  //   savedItemNumber || defaultCardsNumber
  // );
  const [currentItemNumber, setCurrentItemNumber] =
    useState<number>(defaultCardsNumber);

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
    // localStorage.setItem('Items count', `${currentItemNumber}`);
    // navigate(`/pages/${defaultPage}`);
    console.log(defaultPage);
  };

  return (
    <div
      className={styles.changer_wrapper}
      data-testid="range-changer-container"
    >
      <span className={styles.title}>change the number of elements:</span>
      <div className={styles.arrows_wrapper}>
        <div
          className={`${
            currentItemNumber < 12 ? styles.arrow_active : styles.arrow
          } ${styles.arrow_top}`}
          onClick={increaseQuantity}
        ></div>
        <p className={styles.item_number} data-testid="elements_number">
          {currentItemNumber}
        </p>
        <div
          className={`${
            currentItemNumber > 1 ? styles.arrow_active : styles.arrow
          } ${styles.arrow_bottom}`}
          onClick={reduceQuantity}
        ></div>
      </div>
      <button
        className={styles.button_install}
        onClick={setItemsCount}
        data-testid="button_install"
      >
        install
      </button>
    </div>
  );
};
export default ItemChanger;
