import { Box, Typography, Paper } from '@mui/material';
import React, { useState } from 'react';

import { StandaloneDayView } from '@mui/x-scheduler/day-view';

import { ptBR as dateFnsPtBR } from 'date-fns/locale/pt-BR';
import { ptBR as schedulerPtBR } from '@mui/x-scheduler/locales';

import { resources } from '../data/calendarEvents';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { getAllAppointments } from '@/helpers/getAllAppointments';
import StatusChip from '@/components/ui/StatusChip/StatusChip';

const DashboardCalendarDay = () => {
  // const [events, setEvents] = useState(calendarEvents);
  const listPatients = usePatientsStore((state) => state.patientsList);

  const appointments = getAllAppointments(listPatients);

  const today = new Date();

  const appointmentsToday = appointments.filter(
    (item) => item.date === today.toISOString().split('T')[0]
  );

  // console.log('listPatients', listPatients);
  console.log('appointmentsToday', appointmentsToday);
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        gap: 3,
        borderColor: 'border.default',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      <Box sx={{ width: '100%', height: 450 }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Próximos Atendimentos
        </Typography>

        <Box>
          {appointmentsToday.map((appointment) => (
            <Box key={appointment.id} sx={{ display: 'flex', gap: 1 }}>
              <Box>
                <Typography>{appointment.time} -</Typography>
              </Box>
              <Box>
                <Typography>{appointment.patientName}</Typography>

                <StatusChip status={appointment.status} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardCalendarDay;
