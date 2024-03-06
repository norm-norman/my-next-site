import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SiteLogoSVG from './site-logo-svg';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const NavigationButtons = styled(ButtonBase)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Neue Regrade',
  fontSize: '1.4em',
  padding: '0.5em',
  '&:hover': {
    color: 'grey',
    fontWeight: 'bold',
  },
}));

const NavigationHeaderDesktop = () => {
  return (
    <Box sx={{ width: '100%', paddingX: '10%', paddingTop: '5%' }}>
      <Grid
        container
        spacing={5}
        width={'75vw'}
        alignItems={'center'}
        fullWidth
      >
        <Grid item xs="auto">
          <SiteLogoSVG />
        </Grid>
        <Grid item xs="auto">
          <Stack id="navButtons" alignItems={'start'}>
            <NavigationButtons variation={'text'} href={'#aboutMe'}>
              My Approach to Developement
            </NavigationButtons>
            <NavigationButtons variation={'text'} href={'#aboutMe'}>
              Projects & Experience
            </NavigationButtons>
            <NavigationButtons variation={'text'} href={'#aboutMe'}>
              Personal Life
            </NavigationButtons>
            <NavigationButtons variation={'text'} href={'#aboutMe'}>
              Contact
            </NavigationButtons>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationHeaderDesktop;
