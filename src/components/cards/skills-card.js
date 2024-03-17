import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';

// component imports
import SkillPillGrid from '../skills/skill-pill-grid';
import ValuePropWithHeader from '../text/value-prop-with-header';

const SkillsCard = ({ header, subheader, skills }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 2 }}
    >
      <ValuePropWithHeader header={header} />
      <SkillPillGrid skills={skills} />
    </Stack>
  );
};

export default SkillsCard;
