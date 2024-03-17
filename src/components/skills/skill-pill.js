import React from 'react';

// mui imports
import Box from '@mui/material/Box';

const SkillPill = ({ text }) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid #47B09D',
        padding: '10px',
        color: '#47B09D',
      }}
    >
      {text}
    </Box>
  );
};

export default SkillPill;
