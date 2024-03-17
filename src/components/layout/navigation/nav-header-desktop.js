import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

// component imports
import NavigationButtons from '../../buttons/navigation-buttons';

const StylizedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#0a1128',
  opacity: '100%',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'end',
  paddingRight: '5vw',
  paddingTop: '3vh',
}));

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
            <StylizedAppBar component="nav">
              <NavigationButtons stackDirection={'row'} />
            </StylizedAppBar>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationHeaderDesktop;
