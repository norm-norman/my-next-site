import React from 'react';

// mui imports
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// component imports
import SkillsCard from './skills-card';

const SkillsGroup = ({ isLargeScreen }) => {
  const skills = ['php', 'react', 'nextjs', 'java', 'cypress'];
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: '#001F54',
        backgroundColor: '#080E21',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
        borderRadius: '10px',
        justifyContent: 'center',
      }}
    >
      <Stack direction={isLargeScreen ? 'row' : 'column'}>
        <SkillsCard
          header="Devops"
          subheader="Tools & Languages"
          skills={skills}
        />
        <Divider
          orientation={isLargeScreen ? 'vertical' : 'horizontal'}
          flexItem
          sx={{ bgcolor: '#001F54' }}
        />
        <SkillsCard
          header="Frontend & Design"
          subheader="Tools & Languages"
          skills={skills}
        />
        <Divider
          orientation={isLargeScreen ? 'vertical' : 'horizontal'}
          flexItem
          sx={{ bgcolor: '#001F54' }}
        />
        <SkillsCard
          header="Backend & Database"
          subheader="Tools & Languages"
          skills={skills}
        />
      </Stack>
    </Box>
  );
};

export default SkillsGroup;
