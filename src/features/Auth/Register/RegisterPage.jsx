import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 6,
      }}
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff',
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
}
