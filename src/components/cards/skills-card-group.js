import React from 'react';

// mui imports
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// component imports
import SkillsCard from './skills-card';

const SkillsGroup = ({ isLargeScreen, skillsByCategory }) => {
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
        justifyContent: 'space-around',
        minWidth: isLargeScreen ? '896px' : '96px',
        maxWidth: '1100px',
      }}
    >
      <Stack direction={isLargeScreen ? 'row' : 'column'}>
        <SkillsCard
          header={skillsByCategory[0].category}
          skills={skillsByCategory[0].skills}
        />
        <Divider
          orientation={isLargeScreen ? 'vertical' : 'horizontal'}
          flexItem
          sx={{ bgcolor: '#001F54' }}
        />
        <SkillsCard
          header={skillsByCategory[1].category}
          skills={skillsByCategory[1].skills}
        />
        <Divider
          orientation={isLargeScreen ? 'vertical' : 'horizontal'}
          flexItem
          sx={{ bgcolor: '#001F54' }}
        />
        <SkillsCard
          header={skillsByCategory[2].category}
          skills={skillsByCategory[2].skills}
        />
      </Stack>
    </Box>
  );
};

export default SkillsGroup;
