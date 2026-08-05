import React from 'react';
import { Box } from '@mui/material';
import LoginForm from './components/LoginForm';
import AuthLayout from '../components/AuthLayout/AuthLayout';

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </Box>
  );
}
