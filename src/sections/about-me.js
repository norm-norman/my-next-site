import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import SkillsGroup from '../components/cards/skills-card-group';

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  width: '80%',
};

const skillsByCategory = [
  {
    category: 'DevOps',
    skills: ['Jenkins', 'GCP', 'Buildkite', 'Kubernetes', 'Docker'],
  },
  {
    category: 'Backend & Database',
    skills: ['PHP', 'Java', 'Node.js', 'C#', 'GQL', 'SQL', 'BigQuery'],
  },
  {
    category: 'Frontend & Design',
    skills: [
      'React',
      'Next.js',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'Canva',
      'Figma',
    ],
  },
];

const AboutMe = () => {
  const isLargeScreen = useMediaQuery('(min-width:950px)');
  return (
    <div id={'aboutMe'} style={styles}>
      <Stack
        direction={isLargeScreen ? 'column' : 'column'}
        justifyContent="center"
        alignItems="center"
        spacing={6}
        sx={{ color: '#fff', paddingTop: isLargeScreen ? '10vh' : '0' }}
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
        <SkillsGroup
          isLargeScreen={isLargeScreen}
          skillsByCategory={skillsByCategory}
        />
      </Stack>
    </div>
  );
};

export default AboutMe;
