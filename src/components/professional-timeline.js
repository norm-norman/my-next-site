import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';

const professionalTimelineInformation = [
  {
<<<<<<< Updated upstream
=======
    date: '2020 - Present',
    logoSrc: 'wayfair_logo.png',
    company: 'Wayfair',
    title: 'Software Engineer I & II',
    positionData: {
      products: 'Registry, Lists, Design Services',
    },
  },
  {
>>>>>>> Stashed changes
    date: '2019',
    company: 'Wayfair',
    title: 'Software Engineering Intern',
    teams: 'Credit Card',
  },
  {
    date: '2020 - 2022',
    company: 'Wayfair',
    title: 'Software Engineering I',
    teams: 'Registry, Lists',
  },
  {
<<<<<<< Updated upstream
    date: '2022 - Present',
    company: 'Wayfair',
    title: 'Software Engineering II',
    teams: 'Design Services',
=======
    logoSrc: 'bu_logo.png',
    company: 'Boston University',
    title: 'B.S. in Computer Engineering',
>>>>>>> Stashed changes
  },
];

// TODO: clean this up and add a popout with info about the clicked on job
const ProfessionalTimeline = () => {
  return (
<<<<<<< Updated upstream
    <Timeline position="alternate" width="100%">
      {professionalTimelineInformation.map(
        ({ date, company, title, teams }) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0', width: '100%' }}
                align="right"
                variant="body2"
              >
                {date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  {company}
                </Typography>
                <p>{title}</p>
                <p>{teams}</p>
              </TimelineContent>
=======
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
              <TimelineLineNode />
              <TimelineContentNode
                company={company}
                title={title}
                teams={teams}
                date={date}
                logoSrc={logoSrc}
                positionData={positionData}
              />
>>>>>>> Stashed changes
            </TimelineItem>
          );
        }
      )}
    </Timeline>
  );
};

export default ProfessionalTimeline;
