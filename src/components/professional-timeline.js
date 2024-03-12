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
    date: '2022 - Present',
    company: 'Wayfair',
    title: 'Software Engineering II',
    teams: 'Design Services',
  },
];

// TODO: clean this up and add a popout with info about the clicked on job
const ProfessionalTimeline = () => {
  return (
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
            </TimelineItem>
          );
        }
      )}
    </Timeline>
  );
};

export default ProfessionalTimeline;
