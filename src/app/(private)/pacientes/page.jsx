import Title from '@/components/Title/Title';
import CustomButton from '@/ui/CustomButton/CustomButton';
import { Box, Paper, Stack, Typography } from '@mui/material';

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
        <Title>Pacientes</Title>
        <Box>
          <CustomButton> + Novo Paciente</CustomButton>
        </Box>
      </Stack>
      <Stack sx={{ pt: 2 }}>
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: 500,
            borderColor: 'border.default',
            backgroundColor: 'background.default',
            borderRadius: 2,
            boxShadow: 'none',
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid',
              borderBottomColor: 'border.default',
              width: '100%',
            }}
          >
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Listagem de Pacientes
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            Tabela com pacientes cadastrados
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
}
