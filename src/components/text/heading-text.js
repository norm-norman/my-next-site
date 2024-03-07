import React from 'react';
// mui imports
import { styled } from '@mui/material/styles';
import Typography from '@mui/joy/Typography';

const StylizedText = styled('div')(({ theme }) => ({
  ...theme.typography,
}));

const HeadingText = ({ level, text }) => {
  return (
    <StylizedText>
      <Typography level={level} color="#ffffff" textAlign={'center'}>
        {text}
      </Typography>
    </StylizedText>
  );
};
export default HeadingText;
