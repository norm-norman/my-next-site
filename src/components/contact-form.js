import React, { useState } from 'react';

// mui imports
import { alpha, styled } from '@mui/material/styles';
import { Button, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const TextInput = styled(TextField)({
  fontFamily: 'Neue Regrade',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
      borderWidth: '0 0 1px 0',
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiFormLabel-root': {
    color: 'white',
  },
});

const SubmitButton = styled(Button)({
  color: 'white',
  borderColor: 'grey',
  size: 'medium',
  width: '50%',
  '&:hover fieldset': {
    borderColor: 'white',
  },
});

const ContactForm = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Delivering');
    const formData = new FormData(event.target);

    formData.append('access_key', 'a65cff00-e7c2-47dd-9936-1edf258bea83');
    formData.append('subject', 'TESTING WEB FORM');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Sent!');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: 'grid',
        margin: isLargeScreen ? '10%' : '5%',
        width: isLargeScreen ? '35vw' : '75vw',
        borderRadius: '10px',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ padding: isLargeScreen ? '15%' : '10%' }} spacing={3}>
        <TextInput label="Your Email" name="email" required />
        <TextInput label="Your name" name="name" required />
        <TextInput
          multiline
          rows={4}
          label="Your Message"
          name="message"
          required
        />
        <SubmitButton variant="outlined" type="submit">
          {result || 'Send'}
        </SubmitButton>
      </Stack>
    </Box>
  );
};

export default ContactForm;
