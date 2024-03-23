import React from 'react';

// mui imports
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
          <p style={{ textAlign: 'justify' }}>
            Hey! My journey as a full-stack developer started in a classroom at{' '}
            <span style={{ fontWeight: 'bold' }}>Boston University</span>, where
            I was given an open ended task to create a React web app from which
            to control a small vehicle and I ran with it. Nearly 6 years later I
            have a few years of experience under my belt and even more love for
            what I do. After nearly 4 years at{' '}
            <span style={{ fontWeight: 'bold' }}>Wayfair</span>, I am looking
            for my next project and am excited for what the future has in store.
            I am a passionate, product-driven, user-focused developer with a
            drive to innovate and build success. Sound interesting? Scroll to
            check out my page or{' '}
            <a
              href="#contact"
              style={{
                fontWeight: 'bold',
                color: 'inherit',
              }}
            >
              contact me to start connecting
            </a>
            !
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
