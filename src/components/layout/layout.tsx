import { Outlet } from 'react-router-dom';
import Header from '../header/header.tsx';
import { useAppSelector } from '../../hooks';

const Layout = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <Header user={user} />
      <Outlet />
    </>
  );
};

export default Layout;
