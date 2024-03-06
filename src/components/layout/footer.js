import React from 'react';
import SocialMediaIconButtons from '../buttons/social-media-icon-buttons';
import ContactForm from '../contact-form';
import HeadingText from '../text/heading-text';
import Stack from '@mui/material/Stack';

const Footer = () => {
  return (
    <Stack
      id={'Contact'}
      alignItems={'center'}
      sx={{ paddingBottom: '20px', color: 'white' }}
      direction={'row'}
    >
      <Stack justifyContent={'center'} alignItems={'center'}>
        <HeadingText level={'h4'} text={'Want to Chat?'} />
        <p>Fill out this form or follow me on the platforms listed below</p>
        <SocialMediaIconButtons />
      </Stack>
      <ContactForm />
    </Stack>
  );
};

export default Footer;
