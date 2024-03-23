import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

// component imports
import HeadingText from '../text/heading-text';
import SocialMediaIconButtons from '../buttons/social-media-icon-buttons';
import ContactFormWrapper from '../contact-form/contact-form-wrapper';

const Footer = () => {
  const isLargeScreen = useMediaQuery('(min-width:1000px)');
  return (
    <Stack
      id={'contact'}
      alignItems={'center'}
      sx={{ paddingBottom: '20px', color: 'white' }}
      direction={isLargeScreen ? 'row' : 'column'}
    >
      <Stack justifyContent={'center'} alignItems={'center'}>
        <HeadingText level={'h4'} text={'Want to Chat?'} />
        <p>Fill out this form or follow me on the platforms listed below</p>
        <SocialMediaIconButtons />
      </Stack>
      <ContactFormWrapper />
    </Stack>
  );
};

export default Footer;
