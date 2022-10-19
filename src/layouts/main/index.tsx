import { Outlet } from 'react-router-dom';
// material
// components
//
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      <MainFooter />
    </>
  );
}
