import React from 'react';

// component imports
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
} from '../custom-stylized/experience-toggle-buttons';

const ExperienceToggle = ({ activeExperienceType, onChangeCallback }) => {
  return (
    <StyledToggleButtonGroup
      color="primary"
      value={activeExperienceType}
      exclusive
      onChange={onChangeCallback}
      aria-label="experience-toggle"
    >
      <StyledToggleButton value="professional" default>
        Professional & Academic
      </StyledToggleButton>
      <StyledToggleButton value="projects">Projects</StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ExperienceToggle;
