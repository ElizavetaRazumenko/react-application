import { Outlet } from 'react-router';
import MainPage from '../main/main';

const Layout = () => {
  return (
    <div>
      <MainPage />
      <Outlet />
    </div>
  );
};

export default Layout;
