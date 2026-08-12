import React from 'react';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import {
  Box,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';

const PatientsList = ({ setViewMode }) => {
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
          <CustomButton onClick={() => setViewMode('create')}>
            + Novo Paciente
          </CustomButton>
        </Box>
      </Box>
      <Paper
        variant="outlined"
        sx={{
          width: '100%',
          height: 500,
          borderColor: 'border.default',
          backgroundColor: 'background.default',
          borderRadius: 2,
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            p: 2,
            borderBottom: '1px solid',
            borderBottomColor: 'border.default',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Listagem de Pacientes
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          Tabela com pacientes cadastrados
        </Box>
      </Paper>
    </Stack>
  );
};

export default PatientsList;
