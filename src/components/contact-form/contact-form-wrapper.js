import React, { useState } from 'react';

// mui imports
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

// component imports
import SuccessfulSubmitState from './successful-submit-state';
import ContactForm from './contact-form';

const buttonTexts = { send: 'Send', sending: 'Sending...' };

const ContactFormWrapper = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [showSubmitted, setShowSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState(buttonTexts.send);
  const [errorText, setErrorText] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText(buttonTexts.sending);
    const formData = new FormData(event.target);

    formData.append('access_key', 'a65cff00-e7c2-47dd-9936-1edf258bea83');
    formData.append('subject', 'EMAIL FROM WEBSITE');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setShowSubmitted(true);
      setButtonText(buttonTexts.send); // reset button text
    } else {
      console.log('Error', data);
      setErrorText(data.message);
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
      {showSubmitted ? (
        <SuccessfulSubmitState setShowSubmitted={setShowSubmitted} />
      ) : (
        <ContactForm
          onSubmit={onSubmit}
          buttonText={buttonText}
          errorText={errorText}
        />
      )}
    </Box>
  );
};

export default ContactFormWrapper;
