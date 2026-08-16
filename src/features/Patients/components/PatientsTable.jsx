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
  Tooltip,
} from '@mui/material';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const PatientsTable = () => {
  const listPatients = usePatientsStore((state) => state.patientsList);

  return (
    <Box>
      <TableContainer component={Paper} sx={{}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>NOME</TableCell>
              <TableCell>TELEFONE</TableCell>
              <TableCell>DATA DE NASCIMENTO</TableCell>
              <TableCell>AÇÕES</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listPatients.map((patient, index) => (
              <TableRow key={index} hover role="checkbox">
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.date_birth}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 2, cursor: 'pointer' }}>
                    <Tooltip title="Visualizar paciente">
                      <RemoveRedEyeIcon sx={{ color: 'primary.main' }} />
                    </Tooltip>{' '}
                    <Tooltip title="Editar paciente">
                      <EditIcon />
                    </Tooltip>{' '}
                    <Tooltip title="Deletar paciente">
                      <DeleteIcon sx={{ color: 'red' }} />
                    </Tooltip>{' '}
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
