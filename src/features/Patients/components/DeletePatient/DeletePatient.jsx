'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Box, Stack, Paper, Typography, Divider } from '@mui/material';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import CustomTitle from '@/ui/CustomTitle/CustomTitle';
import LinkButton from '@/ui/Buttons/LinkButton/LinkButton';
import CustomModal from '@/ui/CustomModal/CustomModal';
import { usePatients } from '../../hooks/usePatients';
import { usePatient } from '../../hooks/usePatient';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DeletePatient = () => {
  const { id } = useParams();
  const patient = usePatient(id);
  const router = useRouter();

  const { handleDeletePatient } = usePatients();

  const [deleteSuccessModal, setDeleteSuccessModal] = useState(false);

  const handleDelete = (id) => {
    handleDeletePatient(id);
    setDeleteSuccessModal(true);
  };

  const handleCloseModal = () => {
    setDeleteSuccessModal(false);
    router.push('/pacientes');
  };

  const handleClose = () => {
    router.push('/pacientes');
  };

  return (
    <Box>
      <CustomModal
        open={deleteSuccessModal}
        onClose={handleCloseModal}
        title={'Exclusão concluída!'}
        description={'Paciente excluído com sucesso!'}
      >
        <CustomButton onClick={handleCloseModal}>Fechar</CustomButton>
      </CustomModal>

      <LinkButton href="/pacientes" icon={ArrowBackIcon}>
        Voltar para pacientes
      </LinkButton>
      <Stack
        sx={{
          pt: 2,
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: 400,
            borderColor: 'border.default',
            backgroundColor: 'background.default',
            borderRadius: 2,
            boxShadow: 'none',
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1,
            }}
          >
            <CustomTitle title="Excluir paciente" />
          </Box>
          <Divider />
          <Box sx={{ p: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography>
                Tem certeza que deseja excluir o paciente{' '}
                <strong>{patient?.name}</strong>?
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Todos os dados relacionados a este paciente serão removidos.
                Essa ação não poderá ser desfeita.
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CustomButton
                  background="button.disabled"
                  color="text.secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </CustomButton>
                <CustomButton
                  onClick={() => handleDelete(id)}
                  background="error.main"
                >
                  Excluir
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default DeletePatient;
