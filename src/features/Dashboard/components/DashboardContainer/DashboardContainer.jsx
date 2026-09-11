'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';
import Title from '@/components/ui/Title/Title';
import RecentPatients from '../RecentPatients/RecentPatients';
import NextAppointments from '../NextAppointments/NextAppointments';
import DashboardStats from '../DashboardStats/DashboardStats';

const DashboardContainer = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 1200, width: '100%' }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Box>
          <Title>Dashboard</Title>
        </Box>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <DashboardStats />
      </Grid>

      <Grid container spacing={2}>
        <Grid size={7}>
          <RecentPatients />
        </Grid>
        <Grid size={5}>
          <NextAppointments />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContainer;
