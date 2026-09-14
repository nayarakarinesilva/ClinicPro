import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import Input from '@/components/ui/Input/Input';
import TextArea from '@/components/ui/TextArea/TextArea';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useAddMedicalRecord } from './hooks/useAddMedicalRecord';

const AddMedicalRecordModal = ({ openModal, onClose, patient }) => {
  const { handleSubmit, handleAddMedicalRecord, register, errors } =
    useAddMedicalRecord(patient.id, onClose);

  return (
    <Dialog
      open={openModal}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': {
          minHeight: '40vh',
          borderRadius: '12px',
          backgroundColor: 'background.default',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'background.paper',
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Adicionar Procedimento
        </DialogTitle>

        <IconButton
          edge="start"
          color="inherit"
          onClick={() => onClose()}
          aria-label="close"
          sx={{ marginRight: '20px', color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <form onSubmit={handleSubmit(handleAddMedicalRecord)}>
          <Input
            {...register('date', {
              required: 'Data é obrigatório',
            })}
            label="Data"
            type="date"
            required
            placeholder={'00/00/0000'}
            error={!!errors.date}
            helperText={errors.date?.message}
          />
          <Input
            {...register('procedure', {
              required: 'Procedimento é obrigatório',
            })}
            label="Procedimento"
            type="text"
            required
            placeholder={'Ex: consulta clínica geral'}
            error={!!errors.procedure}
            helperText={errors.procedure?.message}
          />
          <TextArea
            {...register('observations', {
              required: 'Observações são obrigatórias',
            })}
            label={'Observações'}
            type={'text'}
            required
            placeholder={'Anotações clínicas...'}
            error={!!errors.observations}
            helperText={errors.observations?.message}
          />
          <DialogActions>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CustomButton
                background="button.disabled"
                color="text.secondary"
                onClick={onClose}
              >
                Cancelar
              </CustomButton>
              <CustomButton type="submit">Salvar</CustomButton>
            </Box>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicalRecordModal;
