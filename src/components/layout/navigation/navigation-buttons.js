import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Neue Regrade',
  fontSize: '1.4em',
  padding: '0.5em',
  '&:hover': {
    color: 'grey',
    fontWeight: 'bold',
  },
}));

const NavigationButtons = ({ buttonCallbackFunction }) => {
  return (
    <Stack id="navigationButtons" alignItems={'end'}>
      <NavigationButton
        variation={'outlined'}
        href={'#methodology'}
        onClick={buttonCallbackFunction}
      >
        My Approach to Developement
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'#experience'}
        onClick={buttonCallbackFunction}
      >
        Professional Experience
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'#contact'}
        onClick={buttonCallbackFunction}
      >
        Contact
      </NavigationButton>
    </Stack>
  );
};

export default NavigationButtons;
