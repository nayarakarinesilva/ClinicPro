import React from 'react';
import AuthLayout from './components/AuthLayout/AuthLayout';

const AuthPages = ({ formComponent }) => {
  return <AuthLayout>{formComponent}</AuthLayout>;
};

export default AuthPages;
