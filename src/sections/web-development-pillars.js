import React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollingBackgroundText from '../components/text/background-text';
import DevelopmentPillarCard from '../components/cards/development-pillar-card';

const pillarTexts = [
  {
    id: 0,
    header: 'User Experience should be EASY',
    text: 'The user should never have to wonder how to interact with your product. Instead the interactions should be simple and intuitive.',
  },
  {
    id: 1,
    header: 'User Experience should be EXCITING',
    text: 'The user should want to keep using your product. Often if the UX is done well and the experience is intuitive this will be exciting for the user.',
  },
  {
    id: 2,
    header: 'User Experience should force you to SCALE',
    text: 'We want to create a user experience that gets people wanting to try our product. Oftentimes it will be taken for granted when a product works smoothly, but the user will not have bad memories to keep them away.',
  },
];

const WebDevelopmentPillars = () => {
  const isSmallScreen = useMediaQuery('(max-width:915px)');
  const lineProps = [
    {
      speed: 49,
      direction: 1,
    },
    {
      speed: 34,
      direction: -1,
    },
    {
      speed: 24,
      direction: 1,
    },
  ];
  return (
    <div id={'methodology'}>
      {!isSmallScreen && <ScrollingBackgroundText lineProps={lineProps} />}
      <Grid
        container
        display="flex"
        alignItems={'stretch'}
        justifyContent={'center'}
        sx={{
          paddingX: 2,
          textAlign: 'center',
          paddingBottom: '25px',
          marginTop: '5em',
        }}
      >
        {pillarTexts.map(({ id, header, text }) => {
          return (
            <Grid item sx={{ display: 'flex', padding: '10px' }}>
              <DevelopmentPillarCard key={id} header={header} text={text} />{' '}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WebDevelopmentPillars;
