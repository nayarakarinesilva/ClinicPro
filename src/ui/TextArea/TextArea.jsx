import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TextArea = ({
  type,
  value,
  label,
  name,
  msgError,
  error,
  helperText,
  defaultValue,
  placeholder,
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
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        error={error}
        helperText={helperText}
        multiline
        rows={4}
        sx={{
          width: '100%',
          '& textarea::placeholder': {
            color: 'text.secondary',
          },
        }}
      />

      {msgError && (
        <Typography sx={{ color: 'error.main', fontSize: '12px' }}>
          {msgError}
        </Typography>
      )}
    </Box>
  );
};

export default TextArea;
