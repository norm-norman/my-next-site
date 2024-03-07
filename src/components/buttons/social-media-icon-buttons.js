import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { openInNewTab } from '../../utils/open-in-new-tab';

const SocialMediaIconButton = styled(ButtonBase)(({ theme }) => ({
  padding: '10px',
  color: 'white',
}));

const SocialMediaIconButtons = () => {
  return (
    <Stack direction={'row'}>
      <SocialMediaIconButton
        onClick={() => openInNewTab('https://www.linkedin.com/in/norm-norman/')}
      >
        <LinkedInIcon fontSize="large" />
      </SocialMediaIconButton>
      <SocialMediaIconButton
        onClick={() => openInNewTab('https://github.com/norm-norman')}
      >
        <GitHubIcon fontSize="large" />
      </SocialMediaIconButton>
    </Stack>
  );
};

export default SocialMediaIconButtons;
