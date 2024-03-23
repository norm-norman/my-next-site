import * as React from 'react';

// mui imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import TimelineNode from './timeline-node';
import TimelineContentNode from './timeline-content-node';

// TODO: clean this up and add a popout with info about the clicked on job
const ProfessionalTimeline = ({ professionalTimelineInformation }) => {
  const isLargeScreen = useMediaQuery('(min-width: 500px)');
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        minWidth: isLargeScreen ? '500px' : '350px',
      }}
    >
      {professionalTimelineInformation.map(
        ({ date, company, title, teams, logoSrc, positionData }, index) => {
          return (
            <TimelineItem key={index} sx={{ fontFamily: 'Neue Regrade' }}>
              <TimelineNode />
              <TimelineContentNode
                company={company}
                title={title}
                teams={teams}
                date={date}
                logoSrc={logoSrc}
                positionData={positionData}
              />
            </TimelineItem>
          );
        }
      )}
    </Timeline>
  );
};

export default ProfessionalTimeline;
