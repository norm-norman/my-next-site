import React, { useState } from 'react';

// mui imports
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// component imports
import ProjectCard from '../cards/project-card';
import SwipeableViews from 'react-swipeable-views';

const ProjectCarousel = ({ projectData }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projectData.length;

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
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90vw',
        }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            overflowX: 'clip',
          }}
        >
          <SwipeableViews
            enableMouseEvents
            onChangeIndex={(index) => {
              setActiveStep(index);
            }}
            index={activeStep}
          >
            {projectData.map(
              ({ name, imageUrl, githubLink, description, skills }) => {
                return (
                  <ProjectCard
                    key={githubLink}
                    width="90vw"
                    name={name}
                    skills={skills}
                    imageUrl={imageUrl}
                    githubLink={githubLink}
                    description={description}
                  />
                );
              }
            )}
          </SwipeableViews>
        </Grid>
      </Grid>
      <Grid item>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          backButton={
            <IconButton
              onClick={handleBack}
              sx={{ color: 'white' }}
              aria-label="last-project"
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
          }
          nextButton={
            <IconButton
              size="large"
              onClick={handleNext}
              sx={{ color: 'white' }}
              aria-label="next-project"
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          }
          sx={{
            backgroundColor: '#0a1128',
            justifyContent: 'center',
            width: 'auto',
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#fff',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectCarousel;
