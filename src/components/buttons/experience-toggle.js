import React from 'react';
// mui imports
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    color: 'white',
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },

  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  [`& .${toggleButtonClasses.selected}`]: {
    color: 'white',
  },
}));

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
        Professional Experience
      </StyledToggleButton>
      <StyledToggleButton value="projects">Projects</StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ExperienceToggle;
