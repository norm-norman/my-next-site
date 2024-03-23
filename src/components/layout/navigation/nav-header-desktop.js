import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

// component imports
import NavigationButtons from '../../buttons/navigation-buttons';
import { StylizedDesktopNavigationBar } from '../../custom-stylized/navigation-bar';

const NavigationHeaderDesktop = () => {
  return (
    <Box sx={{ paddingX: '10%', paddingTop: '5%' }}>
      <Grid
        container
        spacing={5}
        width={'75vw'}
        alignItems={'center'}
        justifyContent={'end'}
      >
        <Grid item xs={6} justifyContent={'end'}>
          <Stack id="navigationButtons" alignItems={'end'}>
            <StylizedDesktopNavigationBar component="nav">
              <NavigationButtons stackDirection={'row'} />
            </StylizedDesktopNavigationBar>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationHeaderDesktop;
