import React from 'react';
import { Box } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoCard from '../InfoCard/InfoCard';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';

const DashboardStats = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  const totasPatients = listPatients?.length;
  const totalConsultations = listPatients.reduce(
    (total, patient) => total + (patient.medicalRecord?.length || 0),
    0
  );

  const patientsWithRecords = listPatients.filter(
    (patient) => patient.medicalRecord?.length > 0
  ).length;

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
          title={'Consultas realizadas'}
          subtitle={'registradas no prontuário'}
          value={totalConsultations}
          icon={<PersonAddIcon />}
          bgColor={'background.active'}
          color={'success.main'}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <InfoCard
          title={'Em acompanhamento'}
          subtitle={'com registros no prontuário'}
          value={patientsWithRecords}
          icon={<AssignmentIcon />}
          bgColor={'warning.light'}
          color={'warning.main'}
        />
      </Box>
    </>
  );
};

export default DashboardStats;
