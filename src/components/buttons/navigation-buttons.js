import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/joy/Typography';

const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Neue Regrade',
  fontSize: '1.4em',
  padding: '0.5em',
  zIndex: 100,
  '&:hover': {
    color: 'grey',
    fontWeight: 'bold',
  },
}));

const NavigationLabel = ({ text }) => {
  return (
    <Typography level="p" sx={{ fontFamily: 'Neue Regrade' }}>
      {text}
    </Typography>
  );
};

const NavigationButtons = ({ buttonCallbackFunction, stackDirection }) => {
  return (
    <Stack direction={stackDirection}>
      <NavigationButton
        variation={'text'}
        href={'#aboutMe'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Skills" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'#methodology'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Methodology" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'#experience'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Experience" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'#contact'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Contact" />
      </NavigationButton>
    </Stack>
  );
};

export default NavigationButtons;
