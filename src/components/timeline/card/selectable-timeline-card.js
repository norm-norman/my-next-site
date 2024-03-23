import React, { useState } from 'react';

// mui imports
import Card from '@mui/material/Card';

// component imports
import VisibleCardContent from './visible-card-content';
import HiddenCardContent from './hidden-card-content';

const SelectableTimelineCard = ({
  company,
  title,
  date,
  key,
  logoSrc,
  positionData,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      key={key}
      variant="outlined"
      onClick={handleExpandClick}
      sx={{
        backgroundColor: '#080E21',
        borderWidth: '1px',
        borderColor: '#001F54',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
        borderRadius: '10px',
        maxWidth: 350,
        color: 'white',
      }}
    >
      <VisibleCardContent
        company={company}
        title={title}
        date={date}
        logoSrc={logoSrc}
        positionData={positionData}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      {positionData && (
        <HiddenCardContent positionData={positionData} expanded={expanded} />
      )}
    </Card>
  );
};

export default SelectableTimelineCard;
