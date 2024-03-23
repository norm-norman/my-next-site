import React from 'react';

// mui imports
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';

// local imports
import { openInNewTab } from '../../utils/open-in-new-tab';
import { ResumeButton } from '../custom-stylized/resume-button';

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
