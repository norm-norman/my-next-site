import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';

// component imports
import { NavigationButton } from '../custom-stylized/navigation-bar';

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
        href={'/#aboutMe'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Skills" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'/#methodology'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Methodology" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'/#experience'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Experience" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'/#contact'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Contact" />
      </NavigationButton>
      <NavigationButton
        variation={'text'}
        href={'/office-hours'}
        onClick={buttonCallbackFunction}
      >
        <NavigationLabel text="Social" />
      </NavigationButton>
    </Stack>
  );
};

export default NavigationButtons;
