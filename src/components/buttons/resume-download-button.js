import React from 'react';

// mui imports
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { openInNewTab } from '../../utils/open-in-new-tab';

const ResumeButton = styled(ButtonBase)(({ theme }) => ({
  padding: '15px',
  margin: '2.0em',
  border: '2px solid white',
  borderRadius: '8px',
  fontFamily: 'Neue Regrade',
  fontSize: '1.5em',
}));

const DownloadResumeButton = ({ isSmallestScreen }) => {
  return (
    <ResumeButton
      onClick={() => openInNewTab('./norm-norman-resume.pdf')}
      target="_blank"
      download
    >
      View My Resume
      {!isSmallestScreen && <OpenInNewIcon />}
    </ResumeButton>
  );
};

export default DownloadResumeButton;
