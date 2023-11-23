import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  setArtworksCount,
  setArtworksCountView,
} from '@/store/reducers/main-slice';
import router from 'next/router';
import { defaultCardsNumber, defaultPage, minCardsNumber } from '../constants';
import styles from './item-changer.module.scss';

const ItemChanger = () => {
  const { artworksCountView } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    if (artworksCountView < defaultCardsNumber) {
      dispatch(setArtworksCountView(artworksCountView + 1));
    }
  };

  const reduceQuantity = () => {
    if (artworksCountView > minCardsNumber) {
      dispatch(setArtworksCountView(artworksCountView - 1));
    }
  };

  const setItemsCount = async () => {
    dispatch(setArtworksCount(artworksCountView));
    router.push(`/page/${defaultPage}`);
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
            artworksCountView < 12 ? styles.arrow_active : styles.arrow
          } ${styles.arrow_top}`}
          onClick={increaseQuantity}
        ></div>
        <p className={styles.item_number} data-testid="elements_number">
          {artworksCountView}
        </p>
        <div
          className={`${
            artworksCountView > 1 ? styles.arrow_active : styles.arrow
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
