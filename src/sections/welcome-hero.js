import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/joy/Typography';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonBase from '@mui/material/ButtonBase';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const DownloadResumeButton = styled(ButtonBase)(({ theme }) => ({
  padding: '15px',
  margin: '2.0em',
  border: '2px solid white',
  borderRadius: '8px',
  fontFamily: 'Neue Regrade',
  fontSize: '1.5em',
}));

const SocialNetworkButton = styled(ButtonBase)(({ theme }) => ({
  padding: '10px',
  color: 'white',
}));

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer');
};

const WelcomeText = styled('div')(({ theme }) => ({
  ...theme.typography,
}));

const getStyles = (isLargeScreen) => {
  const styles = {
    height: getLayoutProps(isLargeScreen).height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getLayoutProps(isLargeScreen).paddingTop,
  };

  return styles;
};

const getLayoutProps = (isLargeScreen) => {
  return isLargeScreen
    ? {
        paddingTop: '5vh',
        imageSize: 500,
        typographyLevel: 'h1',
        textStackDirection: 'row',
        height: '80vh',
        textFlexAlignItems: 'start',
      }
    : {
        imageSize: 400,
        typographyLevel: 'h2',
        textStackDirection: 'column',
        height: '100vh',
        textFlexAlignItems: 'center',
      };
};

const WelcomeHero = () => {
  const isLargeScreen = useMediaQuery('(min-width:1672px)');
  const isSmallestScreen = useMediaQuery('(max-width:280px)');
  return (
    <div style={getStyles(isLargeScreen)} className="welcome-hero">
      <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <Stack
          direction={getLayoutProps(isLargeScreen).textStackDirection}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={3}
        >
          <Stack
            alignItems={getLayoutProps(isLargeScreen).textFlexAlignItems}
            justifyContent={'center'}
            spacing={3}
          >
            <WelcomeText>
              <Typography
                level={getLayoutProps(isLargeScreen).typographyLevel}
                color="#ffffff"
                textAlign={'center'}
              >
                Hi, I'm Norm. Let's Meet.
              </Typography>
            </WelcomeText>
            <p>Full-Stack Web Developer. Innovator. Human.</p>

            <DownloadResumeButton
              onClick={() => openInNewTab('./norm-norman-resume.pdf')}
              target="_blank"
              download
            >
              View My Resume
              {!isSmallestScreen && <OpenInNewIcon />}
            </DownloadResumeButton>
            <Stack direction={'row'}>
              <SocialNetworkButton
                onClick={() =>
                  openInNewTab('https://www.linkedin.com/in/norm-norman/')
                }
              >
                <LinkedInIcon fontSize="large" />
              </SocialNetworkButton>
              <SocialNetworkButton
                onClick={() => openInNewTab('https://github.com/norm-norman')}
              >
                <GitHubIcon fontSize="large" />
              </SocialNetworkButton>
            </Stack>
          </Stack>
          <Box
            id="cartoonProfessionalMeWrapper"
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Tooltip
              disableFocusListener
              followCursor
              arrow
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 400 }}
              title={
                <p>I was made by the GenAI Text-To-Image tool on Canva!</p>
              }
            >
              {!isSmallestScreen && (
                <Image
                  id="cartoonProfessionalMe"
                  src={'/me/professional-cartoon-me-with-shadow.png'}
                  alt="Cartoon headshot without background"
                  width={getLayoutProps(isLargeScreen).imageSize}
                  height={getLayoutProps(isLargeScreen).imageSize}
                />
              )}
            </Tooltip>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default WelcomeHero;
