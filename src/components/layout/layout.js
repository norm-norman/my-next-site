import React from 'react';

// mui imports
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import NavigationHeaderDesktop from './navigation/nav-header-desktop';
import NavigationHeaderMobile from './navigation/nav-header-mobile';
import Footer from './footer';

export default function Layout({
  hideHeader = false,
  hideFooter = false,
  children,
}) {
  const isLargeScreen = useMediaQuery('(min-width:915px)');

  return (
    <>
      <div className="container">
        <main>
          {isLargeScreen ? (
            <NavigationHeaderDesktop />
          ) : (
            <NavigationHeaderMobile />
          )}
          {children}
          {!hideFooter && <Footer />}
        </main>
      </div>
    </>
  );
}
