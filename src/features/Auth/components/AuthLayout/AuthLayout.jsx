import React from 'react';
import { Box } from '@mui/material';
import AuthImage from '../AuthImage/AuthImage';

const AuthLayout = ({children}) => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#fff',
        mt: 7,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1350,
          height: 700,
          bgcolor: '#fff',
          borderRadius: 3,
          overflow: 'hidden',
          display: 'flex',
          boxShadow: '0 12px 30px rgba(0,0,0,.08)',
        }}
      >
        <AuthImage />
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
