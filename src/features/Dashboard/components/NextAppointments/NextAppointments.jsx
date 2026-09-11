import React from 'react';
import { Paper } from '@mui/material';

const NextAppointments = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        gap: 3,
        borderColor: 'border.default',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      Aqui atendimentos
    </Paper>
  );
};

export default NextAppointments;
