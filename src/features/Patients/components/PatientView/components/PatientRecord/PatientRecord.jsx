import React from 'react';
import { Paper, Typography } from '@mui/material';

const PatientRecord = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        height: 130,
        border: 'none',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography>Prontuário</Typography>
    </Paper>
  );
};

export default PatientRecord;
