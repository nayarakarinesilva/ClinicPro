import React from 'react';
import { Box } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import InfoCard from '@/components/ui/InfoCard/InfoCard';
import { getAllAppointments } from '@/helpers/getAllAppointments';

const DashboardStats = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  const totasPatients = listPatients?.length;

  const appointments = getAllAppointments(listPatients);
  const today = new Date();

  const appointmentsToday = appointments.filter(
    (item) => item.date === today.toISOString().split('T')[0]
  );

  const recentPatients = listPatients
    .filter((patient) => {
      const createdAt = new Date(patient.createdAt);
      return (
        createdAt.getMonth() === today.getMonth() &&
        createdAt.getFullYear() === today.getFullYear()
      );
    })
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 5);

  return (
    <>
      <Box sx={{ flex: 1 }}>
        <InfoCard
          title={'Total de Pacientes'}
          subtitle={'cadastrados no sistema'}
          value={totasPatients}
          icon={<PeopleAltIcon />}
          bgColor={'background.secondary'}
          color={'primary.main'}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <InfoCard
          title="Consultas agendadas"
          subtitle="próximos atendimentos"
          value={appointmentsToday.length}
          icon={<AssignmentIcon />}
          bgColor={'background.active'}
          color={'success.main'}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <InfoCard
          title={'Novos pacientes'}
          subtitle={'cadastrados este mês'}
          value={recentPatients.length}
          icon={<PersonAddIcon />}
          bgColor={'warning.light'}
          color={'warning.main'}
        />
      </Box>
    </>
  );
};

export default DashboardStats;
