import React from 'react';
import NavigationHeader from './navigation/nav-header-desktop';
import NavigationHeaderMobile from './navigation/nav-header-mobile';
import Footer from './footer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Layout({ children }) {
  const isLargeScreen = useMediaQuery('(min-width:915px)');

  return (
    <>
      <div className="container">
        <main>
          <NavigationHeader isLargeScreen={isLargeScreen} />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
