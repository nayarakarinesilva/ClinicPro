'use client';
import React from 'react';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import { Box, InputAdornment, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import PatientsTable from '@/features/Patients/components/PatientsTable/PatientsTable';

const PatientsList = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  //Já lista os pacientes cadastrados
  console.log('aqui pacientes', listPatients);

  return (
    <Stack sx={{ pt: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          gap: 8,
          mb: 2,
        }}
      >
        <Box sx={{ width: '70%' }}>
          <TextField
            id="outlined-basic"
            label="Buscar pacientes"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ width: '100%' }}
          />
        </Box>

        <Box>
          <CustomButton href={'/pacientes/novo'}>+ Novo Paciente</CustomButton>
        </Box>
      </Box>
      <PatientsTable />
    </Stack>
  );
};

export default PatientsList;
