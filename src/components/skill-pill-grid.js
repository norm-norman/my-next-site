import React from 'react';

// mui imports
import Grid from '@mui/material/Grid';

// component imports
import SkillPill from './skill-pill';

const SkillPillGrid = ({ skills }) => {
  return (
    <Grid container>
      {skills.map((skill) => {
        return (
          <Grid key={skill} item sx={{ padding: 1 }}>
            <SkillPill text={skill} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillPillGrid;
