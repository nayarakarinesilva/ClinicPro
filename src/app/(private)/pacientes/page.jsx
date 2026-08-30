
import Title from '@/components/Title/Title';
import PatientsList from '@/features/Patients/components/PatientsList/PatientsList';
import { Box, Stack } from '@mui/material';

export default function Pacientes() {
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
        <Box>
          <Title>Pacientes</Title>
        </Box>
      </Stack>
      <PatientsList />
    </Box>
  );
}
