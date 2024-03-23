import React from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/joy/Typography';

// component imports
import { ReturnButton } from '../custom-stylized/contact-form';

const SuccessfulSubmitState = ({ setShowSubmitted }) => {
  return (
    <Stack
      spacing={4}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ paddingBottom: '40px' }}
    >
      <Typography
        level="h5"
        style={{
          color: 'white',
          fontFamily: 'Neue Regrade',
          marginY: 6,
          paddingY: 6,
          textAlign: 'center',
        }}
      >
        Successfully sent your message - I will get back to you as soon as I
        can!
      </Typography>
      <ReturnButton
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => setShowSubmitted(false)}
      >
        Send Another
      </ReturnButton>
    </Stack>
  );
};

export default SuccessfulSubmitState;
