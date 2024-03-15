import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import AppBar from '@mui/material/AppBar';
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

const StylizedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#0a1128',
  opacity: '100%',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'end',
  paddingRight: '5vw',
  paddingTop: '3vh',
}));

const NavigationLabel = ({ text }) => {
  return (
    <Typography level="p" sx={{ fontFamily: 'Neue Regrade' }}>
      {text}
    </Typography>
  );
};

const NavigationButtons = ({ buttonCallbackFunction }) => {
  return (
    <StylizedAppBar component="nav">
      <Stack direction={'row'}>
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
    </StylizedAppBar>
  );
};

export default NavigationButtons;
