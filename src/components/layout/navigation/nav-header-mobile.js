import React, { useState } from 'react';

// mui imports
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// component imports
import NavigationButtons from '../../buttons/navigation-buttons';
import SocialMediaIconButtons from '../../buttons/social-media-icon-buttons';
import { StylizedMobileNavigationBar } from '../../custom-stylized/navigation-bar';

const drawerStyles = {
  backgroundColor: '#001F54',
  height: '100%',
  justifyContent: 'center',
  padding: '5px',
};

const NavigationHeaderMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => () => {
    setIsDrawerOpen(isOpen);
  };

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div
      style={{
        padding: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <StylizedMobileNavigationBar component="nav">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          size="large"
        >
          <MenuIcon />
        </IconButton>
      </StylizedMobileNavigationBar>
      <SwipeableDrawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div style={drawerStyles}>
          <NavigationButtons buttonCallbackFunction={toggleDrawer(false)} />
          <SocialMediaIconButtons />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default NavigationHeaderMobile;
