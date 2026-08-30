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
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import TableActionIcon from '@/features/Patients/components/TableActionIcon/TableActionIcon';
import { formatedDate } from '@/helpers/dateHelper';

const PatientsTable = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="tabela">
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-head': {
                  fontWeight: 600,
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
            {listPatients.map((patient, index) => (
              <TableRow key={index} hover role="checkbox">
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{formatedDate(patient.date_birth)}</TableCell>
                <TableCell>
                  {/* Botões de ações na tabela */}
                  <Box sx={{ display: 'flex', gap: 1, cursor: 'pointer' }}>
                    <TableActionIcon patient={patient} />
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
