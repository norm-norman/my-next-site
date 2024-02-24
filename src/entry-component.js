import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// Page Sections
import WelcomeHero from './sections/welcome-hero';
import AboutMe from './sections/about-me';
import WebDevelopmentPillars from './sections/web-development-pillars';

const EntryComponent = ({ song }) => {
  return (
    <>
      <Box sx={{ p: '5px', color: '#ffffff' }}>
        <WelcomeHero />
        <Stack
          spacing={12}
          justifyContent="center"
          alignItems="center"
          sx={{
            color: '#ffffff',
            padding: '1.5rem',
          }}
        >
          <AboutMe />
          <WebDevelopmentPillars />
        </Stack>
      </Box>
    </>
  );
};

export default EntryComponent;
