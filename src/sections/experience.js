import React, { useState } from 'react';
// mui imports
import Stack from '@mui/material/Stack';

// component imports
import ExperienceToggle from '../components/buttons/experience-toggle';
import ProfessionalTimeline from '../components/professional-timeline';
const Experience = () => {
  const [activeExperienceType, setActiveExperienceType] =
    useState('professional');

  const handleChange = (event, newActiveExperienceType) => {
    if (newActiveExperienceType !== null) {
      setActiveExperienceType(newActiveExperienceType);
    }
  };

  return (
<<<<<<< Updated upstream
    <Stack
      id="experience"
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        paddingBottom: 5,
      }}
    >
      <ExperienceToggle
        activeExperienceType={activeExperienceType}
        onChangeCallback={handleChange}
      />
      {activeExperienceType === 'professional' && <ProfessionalTimeline />}
    </Stack>
=======
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
          <HeadingText level={'h4'} text={'Experience'} />
        </div>
        <ExperienceToggle
          activeExperienceType={activeExperienceType}
          onChangeCallback={handleChange}
        />
        {activeExperienceType === 'professional' && <ProfessionalTimeline />}
        {activeExperienceType === 'projects' && <ProjectGrid />}
      </Stack>
    </div>
>>>>>>> Stashed changes
  );
};

export default Experience;
