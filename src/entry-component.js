import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Image from 'next/image';
// Page Sections
import WelcomeHero from './sections/welcome-hero';
import WebDevelopmentPillars from './sections/web-development-pillars';

const EntryComponent = ({ song }) => {
  return (
    <>
      <Box sx={{ p: '5px', color: '#ffffff' }}>
        <WelcomeHero />
        <Image
          src={'/headshot-no-bg.png'}
          alt="Headshot without background"
          width={300}
          height={300}
        />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          sx={{
            color: '#ffffff',
            padding: '1.5rem',
          }}
        >
          <WebDevelopmentPillars />
        </Stack>
      </Box>
    </>
  );
};

export default EntryComponent;
