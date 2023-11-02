import { Outlet } from 'react-router';
import MainPage from '../main/main';
const Layout = () => {
  return (
    <>
      <MainPage />
      <Outlet />
    </>
  );
};

export default Layout;
