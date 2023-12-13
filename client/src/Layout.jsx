import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {

  const location = useLocation();
  const hideHeaderRoutes = ['/signup', '/signin']
  const hideFooterRoutes = ['/signup', '/signin'];

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div>

      {shouldShowHeader &&
        <div>
          <Header />
        </div>
      }

      <div className='px-4 md:px-16 pt-8'>
        <Outlet />
      </div>

      {shouldShowFooter && (<div className='mt-12'>
        <Footer />
      </div>)}

    </div>
  )
}

export default Layout