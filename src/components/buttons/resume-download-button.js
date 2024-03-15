import React from 'react';

// mui imports
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';

import { openInNewTab } from '../../utils/open-in-new-tab';

const ResumeButton = styled(ButtonBase)(({ theme }) => ({
  padding: '10px',
  margin: '2.0em',
  border: '1px solid white',
  borderRadius: '8px',
  fontFamily: 'Neue Regrade',
  fontSize: '1.2em',
}));

const DownloadResumeButton = ({ isSmallestScreen }) => {
  return (
    <ResumeButton
      onClick={() => openInNewTab('./norm-norman-resume.pdf')}
      target="_blank"
      download
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography level="p">My Resume</Typography>
        {!isSmallestScreen && <OpenInNewIcon />}
      </Stack>
    </ResumeButton>
  );
};

export default DownloadResumeButton;
