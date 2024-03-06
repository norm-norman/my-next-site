import NavigationHeaderDesktop from './nav-header-desktop';
import NavigationHeaderMobile from './nav-header-mobile';
import Footer from './footer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Layout({ children }) {
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
          <Footer />
        </main>
      </div>
    </>
  );
}
