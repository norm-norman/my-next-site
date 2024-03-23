// mui imports
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const TextInput = styled(TextField)({
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

export const SubmitButton = styled(Button)({
  color: 'white',
  borderColor: 'grey',
  size: 'medium',
  width: '50%',
  '&:hover fieldset': {
    borderColor: 'white',
  },
});

export const ReturnButton = styled(Button)({
  color: 'white',
  borderColor: 'grey',
  marginBottom: '50px',
  size: 'medium',
  '&:hover fieldset': {
    borderColor: 'white',
  },
});
