import React, { useState } from 'react';
// mui imports
import Stack from '@mui/material/Stack';

// component imports
import ExperienceToggle from '../components/buttons/experience-toggle';
import ProfessionalTimeline from '../components/professional-timeline';
import HeadingText from '../components/text/heading-text';
import ProjectGrid from '../components/project-grid';

const Experience = () => {
  const [activeExperienceType, setActiveExperienceType] =
    useState('professional');

  const handleChange = (event, newActiveExperienceType) => {
    if (newActiveExperienceType !== null) {
      setActiveExperienceType(newActiveExperienceType);
    }
  };

  return (
    <div style={{ margin: 'auto', width: '60%' }}>
      <Stack
        id="experience"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: 5,
        }}
        spacing={6}
      >
        <div sx={{ paddingBottom: 4, textAlign: 'start' }}>
          <HeadingText level={'h2'} text={'Experience'} />
        </div>
        <ExperienceToggle
          activeExperienceType={activeExperienceType}
          onChangeCallback={handleChange}
        />
        {activeExperienceType === 'professional' && <ProfessionalTimeline />}
        {activeExperienceType === 'projects' && <ProjectGrid />}
      </Stack>
    </div>
  );
};

export default Experience;
