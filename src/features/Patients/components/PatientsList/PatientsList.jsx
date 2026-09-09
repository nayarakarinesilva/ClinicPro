'use client';

import React, { useState } from 'react';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import {
  Box,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import PatientsTable from '@/features/Patients/components/PatientsTable/PatientsTable';

const PatientsList = () => {
  // Guarda qual página está selecionada
  const [page, setPage] = useState(1);

  // Guarda o texto digitado na busca
  const [search, setSearch] = useState('');

  // Pega a lista de pacientes do Zustand
  const listPatients = usePatientsStore((state) => state.patientsList);

  // Define quantos pacientes aparecem em cada página
  const patientsPerPage = 5;

  // Filtra os pacientes de acordo com o nome pesquisado
  const filteredPatients = listPatients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calcula quantas páginas serão necessárias
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  // Define onde começa e termina a lista da página atual
  const start = (page - 1) * patientsPerPage;
  const end = start + patientsPerPage;

  // Pega somente os pacientes que serão exibidos na página atual
  const patientsPaginated = filteredPatients.slice(start, end);

  return (
    <Stack sx={{ pt: 2, width: '100%', maxWidth: '900px' }}>
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
            value={search}
            // Atualiza a busca conforme o usuário digita
            onChange={(event) => setSearch(event.target.value)}
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

      <Box sx={{ height: '400px' }}>
        {/* Mostra a tabela ou mensagem quando não encontrar pacientes */}
        {filteredPatients.length > 0 ? (
          <PatientsTable patients={patientsPaginated} />
        ) : (
          <Box>
            <Typography>Nenhum paciente encontrado</Typography>
          </Box>
        )}
      </Box>

      {/* Só mostra a paginação quando existem pacientes */}
      {filteredPatients.length > 0 && (
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            // Atualiza a página quando o usuário clica em outra página
            onChange={(_, value) => setPage(value)}
            sx={{
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default PatientsList;
