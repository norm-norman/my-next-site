import React from 'react';

// mui imports
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

// component imports
import SkillPillGrid from '../../skills/skill-pill-grid';

const HiddenCardContent = ({ positionData, expanded }) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography
          level="h2"
          sx={{
            fontFamily: 'Neue Regrade',
            textAlign: 'left',
            fontSize: '1.0em',
          }}
        >
          {positionData.description}
        </Typography>
        <Divider
          orientation={'horizontal'}
          sx={{ bgcolor: '#001F54', marginY: 2 }}
        />
        <Typography level="body1" sx={{ fontFamily: 'Neue Regrade' }}>
          Products: {positionData.products}
        </Typography>
        <SkillPillGrid skills={positionData.skills} />
      </CardContent>
    </Collapse>
  );
};

export default HiddenCardContent;
