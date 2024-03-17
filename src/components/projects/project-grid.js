import React, { useState } from 'react';

// mui imports
import Grid from '@mui/material/Grid';

// component imports
import ProjectCard from '../cards/project-card';

const ProjectGrid = ({ projectData }) => {
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
                key={name}
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
