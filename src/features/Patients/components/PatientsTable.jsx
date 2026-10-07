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
} from '@mui/material';
import TableAction from '@/components/ui/TableAction/TableAction';
import { formatedDate } from '@/helpers/dateHelper';
import { formatPhone } from '@/helpers/userHelper';

const PatientsTable = ({ patients }) => {
  return (
    <Box>
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
              {/* <TableCell>ID</TableCell> */}
              <TableCell>NOME</TableCell>
              <TableCell>TELEFONE</TableCell>
              <TableCell>DATA DE NASC.</TableCell>
              <TableCell>AÇÕES</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.map((patient, index) => (
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
                <TableCell>{patient.name}</TableCell>
                <TableCell>{formatPhone(patient.phone)}</TableCell>
                <TableCell>{formatedDate(patient.date_birth)}</TableCell>
                <TableCell>
                  {/* Botões de ações na tabela */}
                  <Box sx={{ display: 'flex', gap: 1, cursor: 'pointer' }}>
                    <TableAction
                      viewHref={`/pacientes/${patient.id}/detalhes`}
                      editHref={`/pacientes/${patient.id}/editar`}
                      deleteHref={`/pacientes/${patient.id}/deletar`}
                    />
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

export default PatientsTable;
