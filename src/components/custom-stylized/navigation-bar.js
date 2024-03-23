// mui imports
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const StylizedDesktopNavigationBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#0a1128',
  opacity: '100%',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'end',
  paddingRight: '5vw',
  paddingTop: '3vh',
}));

export const StylizedMobileNavigationBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#0a1128',
  opacity: '100%',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'end',
  paddingRight: '5vw',
  paddingTop: '3vh',
  zIndex: 100,
}));

export const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Neue Regrade',
  fontSize: '1.4em',
  padding: '0.5em',
  zIndex: 100,
  '&:hover': {
    color: 'grey',
    fontWeight: 'bold',
  },
}));
