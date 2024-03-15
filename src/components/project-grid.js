import React, { useState } from 'react';

// mui imports
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// component imports
import ProjectCard from '../components/cards/project-card';
import SwipeableViews from 'react-swipeable-views';

const ProjectGrid = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    if (activeStep + 1 === maxSteps) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep - 1 < 0) {
      setActiveStep(maxSteps - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Grid>
      <Grid
        item
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        {/* <Grid item>
          <IconButton
            onClick={handleBack}
            sx={{ color: 'white' }}
            aria-label="last-project"
          >
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>
        </Grid> */}
        <Grid item>
          <SwipeableViews
            enableMouseEvents
            onChangeIndex={(index) => {
              setActiveStep(index);
            }}
            index={activeStep}
          >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SwipeableViews>
        </Grid>
        {/* <Grid item>
          <IconButton
            size="large"
            onClick={handleNext}
            sx={{ color: 'white' }}
            aria-label="next-project"
          >
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </Grid> */}
      </Grid>
      <Grid item>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: '#0a1128',
            justifyContent: 'center',
            // width: 'auto'
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#fff',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
