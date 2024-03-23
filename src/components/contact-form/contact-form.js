import React, { useState } from 'react';

// mui imports
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

// component imports
import { TextInput, SubmitButton } from '../custom-stylized/contact-form';

const inputTexts = {
  email: 'Your Email',
  name: 'Your Name',
  message: 'Your Message',
};

const ContactForm = ({ isLargeScreen, onSubmit, buttonText, errorText }) => {
  return (
    <Stack sx={{ padding: isLargeScreen ? '15%' : '10%' }} spacing={3}>
      <TextInput label={inputTexts.email} name={inputTexts.email} required />
      <TextInput label={inputTexts.name} name={inputTexts.name} required />
      <TextInput
        multiline
        rows={4}
        label={inputTexts.message}
        name={inputTexts.message}
        required
      />
      <SubmitButton variant="contained" endIcon={<SendIcon />} type="submit">
        {buttonText}
      </SubmitButton>
      {errorText && (
        <p>
          So sorry, there's been a problem. Please try again in a bit or reach
          out to me through another way if this doesn't resolve.
        </p>
      )}
    </Stack>
  );
};

export default ContactForm;
