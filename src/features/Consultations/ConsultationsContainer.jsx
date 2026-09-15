'use client';

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Title from '@/components/ui/Title/Title';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import InfoCard from '@/components/ui/InfoCard/InfoCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';

const ConsultationsContainer = () => {
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
          <CustomButton href={'/consultas/nova'}>+ Nova Consulta</CustomButton>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={4}>
          <InfoCard
            subtitle={'Consultas de hoje'}
            value={'12'}
            icon={<CalendarMonthIcon />}
            bgColor={'background.secondary'}
            color={'primary.main'}
            height={'100px'}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            subtitle={'Concluídas'}
            value={'2'}
            icon={<CheckBoxIcon />}
            bgColor={'success.light'}
            color={'success.main'}
            height={'100px'}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            subtitle={'Canceladas'}
            value={'3'}
            icon={<CancelIcon />}
            bgColor={'error.light'}
            color={'error.main'}
            height={'100px'}
          />
        </Grid>
      </Grid>
      <Stack>
        <Typography sx={{ color: 'text.primary' }}>
          Próximas consultas{' '}
        </Typography>
        tabela
      </Stack>
    </Box>
  );
};

export default ConsultationsContainer;
