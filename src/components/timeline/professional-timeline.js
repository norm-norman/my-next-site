import * as React from 'react';

// mui imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import useMediaQuery from '@mui/material/useMediaQuery';

// component imports
import TimelineNode from './timeline-node';
import TimelineContentNode from './timeline-content-node';

const professionalTimelineInformation = [
  {
    date: '2020 - Present',
    logoSrc: 'wayfair_logo.png',
    company: 'Wayfair',
    title: 'Software Engineer I & II',
    positionData: {
      products: 'Registry, Lists, Design Services',
      resumeBullets: [
        'Architected and developed internal tool to dynamically filter large lists of products (>50k) in order to decrease sourcing time for designers helping customers.',
        'Led Wayfair’s Design Services tech experience which included maintenance of React web app, Kafka messaging, DB insertions, a Salesforce connection, and a Buildkite CI/CD pipeline.',
        'Reduced missing data monitor trigger amounts by >95% by diagnosing root causes behind missing data and delivering effectively on plan to patch the underlying issues.',
        'Collaborated with cross-functional partners to define multi-year technical roadmaps communicating highly technical plans to non-technical stakeholders.',
        'Elevated understanding across team by documenting technical plans for large scale projects leveraging an Architectural Design Review format.',
        'Designed GraphQL schema to aid in migration from Contentful to an internal content management system.',
        'Served different experiences of Design Services Landing Page conditional on the geolocation of the user.',
        'Advised onboarding and ramp-up of junior team member as team lead and mentor for 7 months.',
        'Aided in company-wide migration from legacy PHP monolith code to decoupled Java microservice in collaboration with 15+ engineers.',
      ],
    },
  },
  {
    date: '2019',
    logoSrc: 'wayfair_logo.png',
    company: 'Wayfair',
    title: 'Software Engineering Intern',
    positionData: {
      products: 'Credit Card & Financing',
      resumeBullets: [],
    },
  },
  {
    logoSrc: 'bu_logo.png',
    company: 'Boston University',
    title: 'B.S. in Computer Engineering',
  },
];

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
