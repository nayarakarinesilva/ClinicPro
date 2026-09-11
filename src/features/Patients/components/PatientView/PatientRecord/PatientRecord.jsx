'use client';

import React, { useState } from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import { useParams } from 'next/navigation';
import { usePatient } from '@/features/Patients/hooks/usePatient';
import AddMedicalRecordModal from './AddMedicalRecordModal/AddMedicalRecordModal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
        maxHeight: '480px',
        overflowY: 'auto',
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
            <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
              Prontuário — {patient?.medicalRecord?.length} registros
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
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          {patient?.medicalRecord?.map((user, index) => {
            return (
              <Box key={user.id ?? index}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: 'primary.main', fontSize: '1rem' }}
                  />
                  <Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography
                        sx={{ color: 'text.primary', fontWeight: 600 }}
                      >
                        {user.procedure} -
                      </Typography>
                      <Typography sx={{ color: 'text.muted' }}>
                        {user.date}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'text.muted' }}>
                        {user.observations}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ mx: -2 }} />
              </Box>
            );
          })}
        </Box>
      </Box>

      <AddMedicalRecordModal
        openModal={openModal}
        onClose={handleCloseModal}
        patient={patient}
      />
    </Paper>
  );
};

export default PatientRecord;
