import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import SkillsGroup from '../components/cards/skills-card';

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  width: '80%',
};

const AboutMe = () => {
  const isLargeScreen = useMediaQuery('(min-width:800px)');
  return (
    <div id={'aboutMe'} style={styles}>
      <Stack
        direction={isLargeScreen ? 'row' : 'column'}
        justifyContent="center"
        alignItems={'center'}
        spacing={6}
        sx={{ color: '#fff' }}
      >
        <div
          style={{
            width: isLargeScreen ? '60%' : '100%',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          <p>
            My name is Norm - I am a full stack web developer and I love what I
            do. I am passionate about making intuitive (and exciting!) web
            experiences. I have 3 years of experience, primarily in the
            e-commerce space and am always looking to learn new things.
          </p>
        </div>
        <SkillsGroup isLargeScreen={isLargeScreen} />
      </Stack>
    </div>
  );
};

export default AboutMe;
