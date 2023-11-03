import { Outlet } from 'react-router';
import MainPage from '../main/main';
import { LayoutPropsType } from '../../types/types';

const Layout = (props: LayoutPropsType) => {
  return (
    <>
      <MainPage isDetailedPageOpen={props.isDetailedPageOpen} />
      <Outlet />
    </>
  );
};

export default Layout;
