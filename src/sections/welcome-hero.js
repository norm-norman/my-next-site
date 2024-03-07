import React from 'react';
// mui imports
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
// components
import WelcomeTextAndButtons from '../components/text/welcome-text';
import CartoonMe from '../components/images/cartoon-me';

const getStyles = (isLargeScreen) => {
  const styles = {
    height: getLayoutProps(isLargeScreen).height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getLayoutProps(isLargeScreen).paddingTop,
  };

  return styles;
};

const getLayoutProps = (isLargeScreen) => {
  return isLargeScreen
    ? {
        paddingTop: '5vh',
        imageSize: 500,
        typographyLevel: 'h1',
        textStackDirection: 'row',
        height: '80vh',
        textFlexAlignItems: 'start',
      }
    : {
        paddingTop: '25vh',
        imageSize: 400,
        typographyLevel: 'h2',
        textStackDirection: 'column',
        minHeight: '100vh',
        textFlexAlignItems: 'center',
      };
};

const WelcomeHero = () => {
  const isLargeScreen = useMediaQuery('(min-width:1672px)');
  const isSmallestScreen = useMediaQuery('(max-width:280px)');
  return (
    <div style={getStyles(isLargeScreen)} className="welcome-hero">
      <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <Stack
          direction={getLayoutProps(isLargeScreen).textStackDirection}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={3}
        >
          <WelcomeTextAndButtons
            isSmallestScreen={isSmallestScreen}
            textFlexAlignItems={
              getLayoutProps(isLargeScreen).textFlexAlignItems
            }
            headingTypographyLevel={
              getLayoutProps(isLargeScreen).typographyLevel
            }
          />
          <CartoonMe
            id={'cartoonProfessionalMe'}
            url={'/me/professional-cartoon-me-with-shadow.png'}
            size={getLayoutProps(isLargeScreen).imageSize}
            isSmallestScreen={isSmallestScreen}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default WelcomeHero;
