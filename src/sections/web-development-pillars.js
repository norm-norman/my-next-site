import React from 'react';

// mui imports
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BoltIcon from '@mui/icons-material/Bolt';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

// component imports
import ScrollingTextLines from '../components/text/background-text';
import DevelopmentPillarCard from '../components/cards/development-pillar-card';
import HeadingText from '../components/text/heading-text';

const textProps = [
  { text: 'Ways of Working', color: 'grey', left: 0 },
  { text: 'Methodology', color: '#1EC296', left: 5 },
  { text: 'Pillars of Great Development', color: '#D6D6D6', left: 10 },
];

const pillarTexts = [
  {
    id: 0,
    header: 'User Experience should be EASY',
    text: 'The user should never have to wonder how to interact with your product. Instead the interactions should be simple and intuitive.',
    icon: <BoltIcon fontSize="large" />,
  },
  {
    id: 1,
    header: 'User Experience should be EXCITING',
    text: 'The user should want to keep using your product. Often if the UX is done well and the experience is intuitive this will be exciting for the user.',
    icon: <FaceRetouchingNaturalIcon fontSize="large" />,
  },
  {
    id: 2,
    header: 'User Experience should force you to SCALE',
    text: 'We want to create a user experience that gets people wanting to try our product. Oftentimes it will be taken for granted when a product works smoothly, but the user will not have bad memories to keep them away.',
    icon: <TrendingUpIcon fontSize="large" />,
  },
];

const WebDevelopmentPillars = () => {
  const isSmallScreen = useMediaQuery('(max-width:915px)');
  const lineProps = [
    {
      speed: 49,
      direction: 1,
      textProps,
    },
    {
      speed: 34,
      direction: -1,
      textProps,
    },
    {
      speed: 24,
      direction: 1,
      textProps,
    },
  ];
  return (
    <div id={'methodology'}>
      {!isSmallScreen ? (
        <ScrollingTextLines lineProps={lineProps} />
      ) : (
        <div sx={{ paddingBottom: 4, textAlign: 'start' }}>
          <HeadingText level={'h4'} text={'Methodology'} />
        </div>
      )}
      <Grid
        container
        display="flex"
        alignItems={'stretch'}
        justifyContent={'center'}
        sx={{
          paddingX: 2,
          paddingBottom: 6,
          textAlign: 'center',
          marginTop: '5em',
        }}
      >
        {pillarTexts.map(({ id, header, text, icon }) => {
          return (
            <Grid key={id} item sx={{ display: 'flex', padding: '10px' }}>
              <DevelopmentPillarCard header={header} text={text} icon={icon} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WebDevelopmentPillars;
