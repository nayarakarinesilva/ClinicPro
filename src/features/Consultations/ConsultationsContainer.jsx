'use client';

import React, { useState } from 'react';
import { Box, Grid, Pagination, Stack, Typography } from '@mui/material';
import Title from '@/components/ui/Title/Title';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import InfoCard from '@/components/ui/InfoCard/InfoCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import TableConsultation from './components/TableConsultation';
import { getPagination } from '@/helpers/paginationHelper';
import { getAllAppointments } from '@/helpers/getAllAppointments';

const ConsultationsContainer = () => {
  // Guarda qual página está selecionada
  const [page, setPage] = useState(1);

  const listPatients = usePatientsStore((state) => state.patientsList);

  const today = new Date().toISOString().split('T')[0];

  //Função Pegue as consultas
  const appointments = getAllAppointments(listPatients);

  const appointmentsToday = appointments.filter((item) => item.date === today);
  const appointmentsCanceled = appointmentsToday.filter(
    (item) => item.status === 'cancelada' || 0
  );
  const appointmentsCompleted = appointmentsToday.filter(
    (item) => item.status === 'concluida' || 0
  );

  // Define quantos pacientes aparecem em cada página
  const consultationsPerPage = 5;

  //Função de paginação
  const { paginatedItems, totalPages } = getPagination(
    appointmentsToday,
    page,
    consultationsPerPage
  );

  return (
    <Box sx={{ padding: 2, maxWidth: 1200, width: '100%' }}>
      <Stack
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Title>Consultas</Title>
          <Typography variant="body2" sx={{ padding: 1, color: 'text.muted' }}>
            Gerencie os agendamentos e companhe as consultas dos pacientes
          </Typography>
        </Box>
        <Box>
          <CustomButton href="/consulta/nova">+ Nova Consulta</CustomButton>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={4}>
          <InfoCard
            subtitle={'Consultas de hoje'}
            value={appointmentsToday.length}
            icon={<CalendarMonthIcon />}
            bgColor={'background.secondary'}
            color={'primary.main'}
            height={'100px'}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            subtitle={'Concluídas'}
            value={appointmentsCompleted.length}
            icon={<CheckBoxIcon />}
            bgColor={'success.light'}
            color={'success.main'}
            height={'100px'}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            subtitle={'Canceladas'}
            value={appointmentsCanceled.length}
            icon={<CancelIcon />}
            bgColor={'error.light'}
            color={'error.main'}
            height={'100px'}
          />
        </Grid>
      </Grid>
      <Stack>
        {paginatedItems.length > 0 ? (
          <TableConsultation appointments={paginatedItems} />
        ) : (
          <Box>
            <Typography>Não há consultas agendadas</Typography>
          </Box>
        )}

        {totalPages > 0 && (
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
    </Box>
  );
};

export default ConsultationsContainer;
