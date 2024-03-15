import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SiteLogoSVG from '../../images/site-logo-svg';
import NavigationButtons from './navigation-buttons';
import SocialMediaIconButtons from '../../buttons/social-media-icon-buttons';
const NavigationHeader = () => {
  return (
    <Box sx={{ paddingX: '10%', paddingTop: '5%' }}>
      <Grid
        container
        spacing={5}
        width={'75vw'}
        alignItems={'center'}
        justifyContent={'end'}
      >
        <Grid item xs={6} sx={{ display: 'hidden' }}>
          {/* <SiteLogoSVG /> */}
        </Grid>
        <Grid item xs={6} justifyContent={'end'}>
          <Stack id="navigationButtons" alignItems={'end'}>
            <NavigationButtons />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationHeader;
