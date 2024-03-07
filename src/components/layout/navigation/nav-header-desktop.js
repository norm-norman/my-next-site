import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SiteLogoSVG from '../../images/site-logo-svg';
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

const NavigationHeader = ({ isLargeScreen }) => {
  return (
    <Box sx={{ paddingX: '10%', paddingTop: '5%' }}>
      <Grid
        container
        spacing={5}
        width={'75vw'}
        alignItems={'center'}
        justifyContent={'end'}
      >
        <Grid item xs={6}>
          <SiteLogoSVG />
        </Grid>
        <Grid item xs={6} justifyContent={'end'}>
          {isLargeScreen && (
            <Stack id="navigationButtons" alignItems={'end'}>
              <NavigationButtons variation={'text'} href={'#methodology'}>
                My Approach to Developement
              </NavigationButtons>
              <NavigationButtons variation={'text'} href={'#experience'}>
                Professional Experience
              </NavigationButtons>
              <NavigationButtons variation={'text'} href={'#contact'}>
                Contact
              </NavigationButtons>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationHeader;
