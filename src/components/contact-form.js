import React, { useState } from 'react';

// mui imports
import { styled } from '@mui/material/styles';
import { Button, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const inputTexts = {
  email: 'Your Email',
  name: 'Your Name',
  message: 'Your message',
};

const buttonTexts = { send: 'Send', sending: 'Sending...', success: 'Sent!' };

const TextInput = styled(TextField)({
  fontFamily: 'Neue Regrade',
  backgroundColor: '#080E21',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
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
    setResult(buttonTexts.sending);
    const formData = new FormData(event.target);

    formData.append('access_key', 'a65cff00-e7c2-47dd-9936-1edf258bea83');
    formData.append('subject', 'EMAIL FROM WEBSITE');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    // TODO: change to alternate output with button to return to form
    if (data.success) {
      setResult(buttonTexts.sent);
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
          {result || buttonTexts.send}
        </SubmitButton>
      </Stack>
    </Box>
  );
};

export default ContactForm;
