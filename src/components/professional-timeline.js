import * as React from 'react';
import dynamic from 'next/dynamic';

// mui imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import useMediaQuery from '@mui/material/useMediaQuery';

// dynamically import this card to avoid hydration error
// without this -> mismatch in what server and client loads
const SelectableTimelineCard = dynamic(
  () => import('../components/cards/selectable-timeline-card'),
  {
    ssr: false,
  }
);

const professionalTimelineInformation = [
  {
    logoSrc: 'bu_logo.png',
    company: 'Boston University',
    title: 'B.S. in Computer Engineering',
  },
  {
    date: '2019',
    logoSrc: 'wayfair_logo.png',
    company: 'Wayfair',
    title: 'Software Engineering Intern',
    positionData: {
      products: 'Credit Card & Financing',
    },
  },
  {
    date: '2020 - Present',
    logoSrc: 'wayfair_logo.png',
    company: 'Wayfair',
    title: 'Software Engineer I & II',
    positionData: {
      products: 'Registry, Lists, Design Services',
    },
  },
];

const TimelineLineNode = ({ date }) => {
  return (
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

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

// TODO: clean this up and add a popout with info about the clicked on job
const ProfessionalTimeline = () => {
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
      {professionalTimelineInformation
        .reverse()
        .map(
          ({ date, company, title, teams, logoSrc, positionData }, index) => {
            return (
              <TimelineItem key={index} sx={{ fontFamily: 'Neue Regrade' }}>
                <TimelineLineNode />
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
