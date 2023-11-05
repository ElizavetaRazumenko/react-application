import { Outlet } from 'react-router';
import MainPage from '../main/main';
import { LayoutPropsType } from '../../types/types';

const Layout = (props: LayoutPropsType) => {
  return (
    <>
      <MainPage
        isDetailedPageOpen={props.isDetailedPageOpen}
        setIsDetailsLoading={props.setIsDetailsLoading}
        setIsDetailsContent={props.setIsDetailsContent}
      />
      <Outlet />
    </>
  );
};

export default Layout;
