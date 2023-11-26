import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import styles from './artworks.module.scss';
import { useDispatch } from 'react-redux';
import {
  setDetailsContent,
  setDetailsIndex,
  setIsDetailsOpen,
} from '@/store/reducers/details-slice';
import router from 'next/router';

const Artworks = () => {
  const dispatch = useDispatch();
  const { resultsItemInfo, isMainLoading } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );

  const sendDetaitsRequest = (id: number) => {
    dispatch(setIsDetailsOpen(true));
    dispatch(setDetailsIndex(id));
    dispatch(setDetailsContent(['', '']));
    router.push(`/details/?id=${id}`);
  };

  return resultsItemInfo.length ? (
    <>
      <div className={isMainLoading ? styles.loader : styles.hidden}></div>
      <div className={isMainLoading ? styles.hidden : styles.results_container}>
        {resultsItemInfo.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => sendDetaitsRequest(item.id)}
            data-testid="card"
          >
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>Click for detailed information</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className={styles.no_results_message}>
      There are no results for this request
    </div>
  );
};

export default Artworks;
