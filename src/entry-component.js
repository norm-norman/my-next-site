import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

// Page Sections
import WelcomeHero from './sections/welcome-hero';
import AboutMe from './sections/about-me';
import WebDevelopmentPillars from './sections/web-development-pillars';
import Experience from './sections/experience';

const getPaddingX = (isLargeScreen) => {
  return isLargeScreen ? '25%' : '0%';
};

const EntryComponent = () => {
  const isLargeScreen = useMediaQuery('(min-value:700px);');
  return (
    <>
      <Box
        sx={{
          paddingX: getPaddingX(isLargeScreen),
          color: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WelcomeHero />
        <Stack
          spacing={16}
          justifyContent="center"
          alignItems="start"
          sx={{
            color: '#ffffff',
            paddingX: getPaddingX(isLargeScreen),
          }}
        >
          <AboutMe />
          <WebDevelopmentPillars />
          <Experience />
        </Stack>
      </Box>
    </>
  );
};

export default EntryComponent;
