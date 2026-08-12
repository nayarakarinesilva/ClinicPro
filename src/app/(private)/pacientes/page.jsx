'use client';

import Title from '@/components/Title/Title';
import PatientsList from '@/features/Patients/components/PatientsList';
import RegisterPatients from '@/features/Patients/components/RegisterPatients';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

export default function Pacientes() {
  const [viewMode, setViewMode] = useState('list');
  return (
    <Box sx={{ padding: 2 }}>
      <Stack
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Title>Pacientes</Title>
        </Box>
      </Stack>
      {viewMode === 'list' && <PatientsList setViewMode={setViewMode} />}
      {viewMode === 'create' && <RegisterPatients setViewMode={setViewMode} />}
    </Box>
  );
}
