import React from 'react';

// mui imports
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';

const TimeLineSegment = () => {
  return (
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default TimeLineSegment;
