import React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
};

const AboutMe = () => {
  const isLargeScreen = useMediaQuery('(min-width:800px)');
  return (
    <div style={styles}>
      <Stack
        direction={isLargeScreen ? 'row' : 'column'}
        justifyContent="center"
        spacing={60}
      >
        <h2>About Me</h2>
        <Image
          src={'/headshot-no-bg-no-shadow.png'}
          alt="Headshot without background"
          width={300}
          height={300}
        />
      </Stack>
    </div>
  );
};

export default AboutMe;
