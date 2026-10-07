import React from 'react';
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from '@mui/material';
import { formatedDate } from '@/helpers/dateHelper';
import TableAction from '@/components/ui/TableAction/TableAction';
import StatusChip from '@/components/ui/StatusChip/StatusChip';

const TableConsultation = ({ appointments }) => {
  const today = new Date().toISOString().split('T')[0];

  const upcomingAppointments = appointments.filter(
    (item) => item.date >= today
  );

  const sortedAppointments = upcomingAppointments.sort((a, b) =>
    a.time.localeCompare(b.time)
  );

  return (
    <Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Typography
          sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '18px' }}
        >
          Próximas consultas
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          boxShadow: 'none',
          overflow: 'hidden',
        }}
      >
        <Table stickyHeader aria-label="tabela">
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-head': {
                  fontWeight: 600,
                  backgroundColor: 'background.light',
                },
                '& .MuiTableCell-root': {
                  color: 'text.muted',
                },
              }}
            >
              <TableCell>DATA</TableCell>
              <TableCell>HORÁRIO</TableCell>
              <TableCell>PACIENTE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAppointments.map((patient, index) => (
              <TableRow
                key={index}
                hover
                role="checkbox"
                sx={{
                  backgroundColor: 'background.default',
                  '& .MuiTableCell-root': {
                    color: 'text.secondary',
                  },
                }}
              >
                <TableCell>{formatedDate(patient.date)}</TableCell>
                <TableCell>{patient.time}h</TableCell>
                <TableCell>{patient.patientName}</TableCell>
                <TableCell>
                  <StatusChip status={patient.status} />
                </TableCell>
                <TableCell>
                  {/* Botões de ações na tabela */}
                  <Box sx={{ display: 'flex', gap: 1, cursor: 'pointer' }}>
                    <TableAction editHref={`/consulta/${patient.id}/editar`} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableConsultation;
