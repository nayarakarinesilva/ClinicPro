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
      primary: '#D5E4F8',
      secondary: '#DBEAFE',
      active: '#DCFCE7',
    },
    error: {
      main: '#F54336',
      light: '#FDE4E1',
    },
    success: {
      main: '#47B881',
      light: '#97D4B4',
    },
    button: {
      primary: '#004AC6',
      disabled: '#D1D5DB',
    },
  },
});
