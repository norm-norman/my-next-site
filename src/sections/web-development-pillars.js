import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
  return (
    <Grid
      id={'methodology'}
      container
      display="flex"
      alignItems={'stretch'}
      justifyContent={'center'}
      sx={{ paddingX: 2, textAlign: 'center', paddingBottom: '25px' }}
    >
      <Grid item md={12}>
        <h1>My 3 Pillars of Great Web Development</h1>{' '}
      </Grid>

      {pillarTexts.map(({ id, header, text }) => {
        return (
          <Grid item sx={{ display: 'flex', padding: '10px' }}>
            <DevelopmentPillarCard key={id} header={header} text={text} />{' '}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WebDevelopmentPillars;
