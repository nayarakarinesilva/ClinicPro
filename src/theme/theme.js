import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#004ac6',
    },
    text: {
      default: '#FFFFFF',
      main: '#3B6FC4',
      primary: '#1F2937',
      secondary: '#434655',
      muted: '#6B7280',
    },
    border: {
      default: '#cfd2e4',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FF',
      light: '#FBFCFF',
      primary: '#D5E4F8',
      secondary: '#DBEAFE',
      active: '#DCFCE7',
    },
    error: {
      main: '#e43e33',
      light: '#FDE4E1',
    },
    success: {
      main: '#3ca874',
      light: '#E3F5EC',
    },
    warning: {
      main: '#E67E22',
      light: '#FDF0E6',
    },
    lilac: {
      main: '#7C3AED',
      light: '#e9d8fc',
    },
    button: {
      primary: '#004AC6',
      disabled: '#D1D5DB',
    },
  },
});
