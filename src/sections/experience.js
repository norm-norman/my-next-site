import React, { useState } from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import ExperienceToggle from '../components/buttons/experience-toggle';
import ProfessionalTimeline from '../components/timeline/professional-timeline';
import ProjectGrid from '../components/projects/project-grid';
import ProjectCarousel from '../components/projects/project-carousel';
import HeadingText from '../components/text/heading-text';

const projectData = [
  {
    name: 'This Site!',
    imageUrl: '/projects/portfolio-site.png',
    githubLink: 'https://github.com/norm-norman/my-next-site',
    description:
      'This NextJS site is my sandbox for trying out new features and learning new skills.',
    skills: ['Next.js', 'React'],
  },
  {
    name: 'Covid Data Visualization App',
    imageUrl: '/projects/covid-visualization-app.png',
    githubLink: 'https://github.com/BUEC500C1/covid19-app-norm-norman/',
    description: 'Mobile app that displayed covid data by country.',
    skills: ['React Native', 'axios'],
  },
  {
    name: 'Straight Path: The Game',
    imageUrl: '/projects/straight-path.png',
    githubLink: 'https://github.com/norm-norman/rn240FinalProject',
    description: 'Trivia game made for final project of religion class',
    skills: ['React', 'CSS'],
  },
];

const Experience = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [activeExperienceType, setActiveExperienceType] =
    useState('professional');

  const handleChange = (event, newActiveExperienceType) => {
    if (newActiveExperienceType !== null) {
      setActiveExperienceType(newActiveExperienceType);
    }
  };

  const ProjectComponent = ({ projectData }) => {
    console.log(isLargeScreen);
    return isLargeScreen ? (
      <ProjectGrid projectData={projectData} />
    ) : (
      <ProjectCarousel projectData={projectData} />
    );
  };

  return (
    <div
      id="experience"
      style={{
        margin: 'auto',
        width: '60%',
        paddingTop: '10vh',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: 5,
        }}
        spacing={6}
      >
        <div sx={{ paddingBottom: 4, textAlign: 'start' }}>
          <HeadingText level={'h4'} text={'Experience'} />
        </div>
        <ExperienceToggle
          activeExperienceType={activeExperienceType}
          onChangeCallback={handleChange}
        />
        {activeExperienceType === 'professional' && <ProfessionalTimeline />}
        {activeExperienceType === 'projects' && (
          <ProjectComponent projectData={projectData} />
        )}
      </Stack>
    </div>
  );
};

export default Experience;
