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
  );
};

export default Experience;
