import React from 'react';
import { Box, Typography, Paper, Divider, Avatar } from '@mui/material';
import LinkButton from '@/components/ui/Buttons/LinkButton/LinkButton';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { formatPhone, getAvatarInitial } from '@/helpers/userHelper';
import Link from 'next/link';
import RecentPatient from './RecentPatient/RecentPatient';

const RecentPatients = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);
  console.log('listPatients', listPatients);
  console.log(
    'createdAt',
    listPatients.map((patient) => patient.createdAt)
  );
  const recentPatients = [...listPatients]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 5);

  console.log('recentPatients', recentPatients);

  return (
    <Paper
      variant="outlined"
      sx={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        borderColor: 'border.default',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
            Pacientes Recentes
          </Typography>
        </Box>
        <Box>
          <LinkButton href="/pacientes">Ver Todos</LinkButton>
        </Box>
      </Box>
      <Divider />

      <Box>
        {recentPatients.map((patient) => (
          <RecentPatient key={patient.id} patient={patient} />
        ))}
      </Box>
    </Paper>
  );
};

export default RecentPatients;
