import React from 'react';
import { Paper } from '@mui/material';
import DashboardCalendarDay from './DashboardCalendarDay/DashboardCalendarDay';

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
      <DashboardCalendarDay />
    </Paper>
  );
};

export default NextAppointments;
