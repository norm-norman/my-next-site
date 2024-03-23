import React from 'react';
import dynamic from 'next/dynamic';

// mui imports
import TimelineContent from '@mui/lab/TimelineContent';

// dynamically import this card to avoid hydration error
// without this -> mismatch in what server and client loads
const SelectableTimelineCard = dynamic(
  () => import('./card/selectable-timeline-card'),
  {
    ssr: false,
  }
);

const TimelineContentNode = ({
  date,
  company,
  title,
  teams,
  logoSrc,
  positionData,
}) => {
  return (
    <TimelineContent sx={{ fontFamily: 'Neue Regrade' }}>
      <SelectableTimelineCard
        date={date}
        company={company}
        title={title}
        teams={teams}
        logoSrc={logoSrc}
        positionData={positionData}
      />
    </TimelineContent>
  );
};

export default TimelineContentNode;
