import React from 'react';
import SiteLogoSVG from '../components/site-logo-svg';
import AnimatedDownArrow from '../components/animated-down-arrow';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const WelcomeText = styled('div')(({ theme }) => ({
  ...theme.typography,
}));

const getPaddingTop = (isLargeScreen) => {
  return isLargeScreen ? '25vh' : '10vh';
};

const getStyles = (isLargeScreen) => {
  const styles = {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getPaddingTop(isLargeScreen),
    backgroundImage: '../../public/forest-happy-couple-runaway.gif',
  };

  return styles;
};

const WelcomeHero = () => {
  const isLargeScreen = useMediaQuery('(min-width:800px)');
  return (
    <div style={getStyles(isLargeScreen)} className="welcome-hero">
      <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <SiteLogoSVG />
        <WelcomeText>
          <Typography
            level={isLargeScreen ? 'h1' : 'h2'}
            color="#ffffff"
            textAlign={'center'}
          >
            Hi, I'm Norm. Let's Meet.
          </Typography>
        </WelcomeText>
        <p>Full-Stack Web Developer. Innovator. Human.</p>
        <AnimatedDownArrow />
      </Stack>
    </div>
  );
};

export default WelcomeHero;
