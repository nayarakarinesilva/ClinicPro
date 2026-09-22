'use client';

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Title from '@/components/ui/Title/Title';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import InfoCard from '@/components/ui/InfoCard/InfoCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import TableConsultation from './components/TableConsultation';

const ConsultationsContainer = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  const today = new Date().toISOString().split('T')[0];

  //Pegue as consultas + nome → depois junte todas as consultas em uma única lista
  const appointments = listPatients
    .map((patient) => {
      const patientAppointments = patient.appointments || [];
      return patientAppointments.map((appointment) => ({
        ...appointment,
        patientName: patient.name,
      }));
    })
    .flat();

  const appointmentsToday = appointments.filter((item) => item.date === today);
  const appointmentsCanceled = appointments.filter(
    (item) => item.status === 'cancelada' || 0
  );
  const appointmentsCompleted = appointments.filter(
    (item) => item.status === 'concluida' || 0
  );

  // console.log('==Consultas', appointments);
  console.log('==Consultas hoje', appointmentsToday);
  // console.log('==today', today);
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
        <TableConsultation appointments={appointmentsToday} />
      </Stack>
    </Box>
  );
};

export default ConsultationsContainer;
