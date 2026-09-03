import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import Input from '@/ui/Input/Input';
import TextArea from '@/ui/TextArea/TextArea';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React from 'react';

const AddMedicalRecordModal = ({ openModal, onClose }) => {
  return (
    <Dialog
      open={openModal}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': {
          minHeight: '40vh',
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600 }}>Adicionar Procedimento</DialogTitle>
      <DialogContent>
        <form>
          <Input
            label="Data"
            type="date"
            placeholder={'00/00/0000'}
            // error={!!errors.confirmEmail}
            // helperText={errors.confirmEmail?.message}
          />
          <Input
            label="Procedimento"
            type="text"
            placeholder={'Ex: consulta clínica geral'}
            // error={!!errors.confirmEmail}
            // helperText={errors.confirmEmail?.message}
          />
          <TextArea
            label={'Observações'}
            type={'text'}
            placeholder={'Anotações clínicas...'}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomButton
            background="button.disabled"
            color="text.secondary"
            onClick={onClose}
          >
            Cancelar
          </CustomButton>
          <CustomButton>Salvar</CustomButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AddMedicalRecordModal;
