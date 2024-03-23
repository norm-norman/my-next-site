import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// component imports
import { openInNewTab } from '../../utils/open-in-new-tab';
import { SocialMediaIconButton } from '../custom-stylized/social-media-icon-buttons';

export const GithubButton = ({ link }) => {
  const githubLink = link || 'https://github.com/norm-norman';
  return (
    <SocialMediaIconButton onClick={() => openInNewTab(githubLink)}>
      <GitHubIcon fontSize="large" />
    </SocialMediaIconButton>
  );
};

const SocialMediaIconButtons = () => {
  return (
    <Stack direction={'row'}>
      <SocialMediaIconButton
        onClick={() => openInNewTab('https://www.linkedin.com/in/norm-norman/')}
      >
        <LinkedInIcon fontSize="large" />
      </SocialMediaIconButton>
      <GithubButton />
    </Stack>
  );
};

export default SocialMediaIconButtons;
