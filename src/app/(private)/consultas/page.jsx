import Title from '@/components/Title/Title';
import { Box, Stack } from '@mui/material';

export default function Consultas() {
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
          <Title>Consultas</Title>
        </Box>
      </Stack>
    </Box>
  );
}
