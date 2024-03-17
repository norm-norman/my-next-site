import React from 'react';
// mui imports
import ToggleButton from '@mui/material/ToggleButton';
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
  '&.Mui-selected, &.Mui-selected:hover': {
    color: '#47B09D',
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
        Professional & Academic
      </StyledToggleButton>
      <StyledToggleButton value="projects">Projects</StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ExperienceToggle;
