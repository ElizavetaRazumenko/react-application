import styles from './layout.module.scss';
import { FC, PropsWithChildren } from 'react';
import router from 'next/router';
import { useAppSelector } from '@/hooks/hooks';
import { MainState } from '@/store/reducers/main-slice';
import Home from '@/pages';

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
        `/?page=${currentPage}&items_count=${artworksCount}&value=${searchInputValue}`,
        undefined,
        { shallow: true },
      );
    }
  };
  return (
    <div className={styles.container} onClick={(e) => closeTheDetailsPage(e)}>
      <Home />
      <div>{children}</div>;
    </div>
  );
};

export default Layout;
