import styles from './layout.module.scss';
import { FC, PropsWithChildren } from 'react';
import router from 'next/router';
import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
// import Main from '@/pages/main';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { currentPage, searchInputValue, artworksCount } = useAppSelector(
    (state: { main: MainState }) => state.main,
  );

  const closeTheDetailsPage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;
    const element = target.closest('.child');
    if (!element) {
      router.push(
        `/main/?page=${currentPage}&items_count=${artworksCount}&value=${searchInputValue}`,
      );
    }
  };
  return (
    <div className={styles.container} onClick={(e) => closeTheDetailsPage(e)}>
      {/* <Main /> */}
      <div>{children}</div>;
    </div>
  );
};

export default Layout;
