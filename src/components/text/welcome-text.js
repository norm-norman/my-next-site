import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';

import HeadingText from '../text/heading-text';
import SocialMediaIconButtons from '../buttons/social-media-icon-buttons';
import DownloadResumeButton from '../buttons/resume-download-button';

const WelcomeTextAndButtons = ({
  isSmallestScreen,
  textFlexAlignItems,
  headingTypographyLevel,
}) => {
  return (
    <Stack
      alignItems={textFlexAlignItems}
      justifyContent={'center'}
      spacing={3}
    >
      <HeadingText
        level={headingTypographyLevel}
        text={"Hi I'm Norm. Let's Meet."}
      />
      <p>Full-Stack Web Developer. Innovator. Human.</p>

      <DownloadResumeButton isSmallestScreen={isSmallestScreen} />
      <SocialMediaIconButtons />
    </Stack>
  );
};

export default WelcomeTextAndButtons;
