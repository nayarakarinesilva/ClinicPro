import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import AuthLayout from '@/features/Auth/components/AuthLayout/AuthLayout';

export default function RegisterPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </Box>
  );
}
