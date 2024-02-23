import React from 'react';
import SiteLogoSVG from '../components/site-logo-svg';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/material/styles';

const WelcomeText = styled('div')(({ theme }) => ({
  ...theme.typography,
}));

const WelcomeHero = () => {
  return (
    <>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <SiteLogoSVG />
        <WelcomeText>
          <Typography level="h1" color="#ffffff">
            Hi, I'm Norm. Let's Meet ...
          </Typography>
        </WelcomeText>
      </Stack>
    </>
  );
};

export default WelcomeHero;
