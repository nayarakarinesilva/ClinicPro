'use client';

import React, { useState } from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import { useParams } from 'next/navigation';
import { usePatient } from '@/features/Patients/hooks/usePatient';
import AddPatientRecordModal from './components/AddPatientRecordModal/AddPatientRecordModal';

const PatientRecord = () => {
  const { id } = useParams();
  const patient = usePatient(id);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: 1,
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography>
              Prontuários - (Colocar quantidade de prontuários )
            </Typography>
          </Box>
          <Box
            sx={{
              width: '20%',
            }}
          >
            <CustomButton onClick={() => setOpenModal(true)}>
              + Adicionar
            </CustomButton>
          </Box>
        </Box>
        <Divider sx={{ my: 1, mx: -2 }} />
        <Box>
          <Typography>Aqui todos os prontuarios</Typography>
        </Box>
      </Box>

      <AddPatientRecordModal openModal={openModal} onClose={handleCloseModal} />
    </Paper>
  );
};

export default PatientRecord;
