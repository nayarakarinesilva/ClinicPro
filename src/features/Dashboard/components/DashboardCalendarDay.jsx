import { Box, Typography, Paper, Divider } from '@mui/material';
import React from 'react';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { getAllAppointments } from '@/helpers/getAllAppointments';
import StatusChip from '@/components/ui/StatusChip/StatusChip';

const DashboardCalendarDay = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  const appointments = getAllAppointments(listPatients);

  const today = new Date();

  const appointmentsToday = appointments.filter(
    (item) => item.date === today.toISOString().split('T')[0]
  );

  const sortedAppointments = appointmentsToday.sort((a, b) =>
    a.time.localeCompare(b.time)
  );

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
        <Divider sx={{ mt: 1 }} />
        {sortedAppointments.length > 0 ? (
          <Box
            sx={{
              maxHeight: '430px',
              overflow: 'auto',
              mt: 1,
            }}
          >
            {sortedAppointments.map((appointment) => (
              <Box
                key={appointment.id}
                sx={{
                  p: 1,
                }}
              >
                <Box sx={{ display: 'flex', gap: 1, p: 1 }}>
                  <Box>
                    <Typography>{appointment.time} -</Typography>
                  </Box>
                  <Box>
                    <Typography>{appointment.patientName}</Typography>

                    <StatusChip status={appointment.status} />
                  </Box>
                </Box>
                <Divider sx={{ mt: 1 }} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box>
            <Typography>Não há pacientes agendados para hoje</Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default DashboardCalendarDay;
