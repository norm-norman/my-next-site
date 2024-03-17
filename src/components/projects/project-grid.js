import React, { useState } from 'react';

// mui imports
import Grid from '@mui/material/Grid';

// component imports
import ProjectCard from '../cards/project-card';

const ProjectGrid = ({ isLargeScreen, projectData }) => {
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
          justifyContent: 'center',
          width: '90vw',
        }}
      >
        {projectData.map(
          ({ name, imageUrl, githubLink, description, skills }) => {
            return (
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  margin: 3,
                }}
              >
                <ProjectCard
                  width={320}
                  name={name}
                  skills={skills}
                  imageUrl={imageUrl}
                  githubLink={githubLink}
                  description={description}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
