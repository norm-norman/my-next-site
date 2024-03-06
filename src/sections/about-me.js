import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
};

const AboutMe = () => {
  const isLargeScreen = useMediaQuery('(min-width:800px)');
  return (
    <div id={'aboutMe'} style={styles}>
      <Stack
        direction={isLargeScreen ? 'row' : 'column'}
        justifyContent="center"
        alignItems={'center'}
        spacing={60}
        sx={{ color: '#fff' }}
      >
        <h2>About Me</h2>
      </Stack>
    </div>
  );
};

export default AboutMe;
