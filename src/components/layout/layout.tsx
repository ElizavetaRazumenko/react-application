import MainPage from '@/pages/page/[page]';
import styles from './layout.module.scss';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainPage />
      <>{children}</>;
    </div>
  );
};

export default Layout;
