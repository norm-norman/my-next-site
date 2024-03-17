import * as React from 'react';

// mui imports
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';

// component imports
import { GithubButton } from '../buttons/social-media-icon-buttons';
import SkillPillGrid from '../skills/skill-pill-grid';

const ProjectCard = ({
  width,
  name,
  description,
  skills,
  githubLink,
  imageUrl,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#080E21',
        borderWidth: '1px',
        borderColor: '#001F54',
        borderRadius: '10px',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
        color: 'white',
        minHeight: '280px',
        width: { width },
      }}
    >
      <CardCover>
        <img src={imageUrl} alt={description} />
      </CardCover>
      <CardCover
        sx={{
          background: 'rgba(0,0,0,0.8)',
        }}
      />
      <CardContent>
        <Typography level="title-lg" textColor={'white'}>
          {name}
        </Typography>
        <Typography level={'p'} textColor="white">
          {description}
        </Typography>
      </CardContent>
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Stack direction={'row'}>
          <SkillPillGrid skills={skills} />
          <GithubButton link={githubLink} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
