import React from 'react';
import { Paper, Typography } from '@mui/material';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useParams } from 'next/navigation';
import { usePatient } from '@/features/Patients/hooks/usePatient';

const PatientInformation = () => {
  const { id } = useParams();

  const patient = usePatient(id);
  console.log('patient', patient);
  
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
      <Typography>Informações</Typography>
    </Paper>
  );
};

export default PatientInformation;
