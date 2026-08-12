import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const Input = ({
  type,
  placeholder,
  value,
  label,
  name,
  msgError,
  error,
  helperText,
  ...props
}) => {
  return (
    <Box sx={{ width: '100%', mb: 1 }}>
      <Typography
        sx={{
          color: 'text.main',
          fontWeight: 600,
          fontSize: '14px',
        }}
      >
        {label}
      </Typography>

      <TextField
        {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        sx={{
          width: '100%',
          '& textarea::placeholder': {
            color: 'text.secondary',
          },
        }}
        error={error}
        helperText={helperText}
      />

      {msgError && (
        <Typography sx={{ color: 'error.main', fontSize: '12px' }}>
          {msgError}
        </Typography>
      )}
    </Box>
  );
};

export default Input;
