import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

// component imports
import { GithubButton } from '../buttons/social-media-icon-buttons';
const ProjectCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#080E21',
        borderWidth: '1px',
        borderColor: '#001F54',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <div>
        <Typography level="title-lg" textColor={'white'}>
          Straight Path: The Game
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src="/projects/straight-path.png" alt="" />
      </AspectRatio>
      <CardContent
        orientation="horizontal"
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
      >
        <GithubButton />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
