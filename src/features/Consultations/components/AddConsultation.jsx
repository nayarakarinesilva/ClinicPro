import React from 'react';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import TextArea from '@/components/ui/TextArea/TextArea';
import {
  Autocomplete,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@/components/ui/Input/Input';
import OutlineButton from '@/components/ui/Buttons/OutlineButton/OutlineButton';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useAddConsultation } from '../hooks/useAddConsultation';

const AddConsultation = ({ openModal, onClose }) => {
  // estado da opção selecionada no Autocomplete
  const [value, setValue] = React.useState(null);

  const listPatients = usePatientsStore((state) => state.patientsList);
  console.log('listPatients', listPatients);

  const { handleAddConsultation, register, handleSubmit, errors } =
    useAddConsultation({ patientId: value?.id, onClose });

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
          Adicionar nova consulta
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
        <Box component="form" onSubmit={handleSubmit(handleAddConsultation)}>
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'primary.main',
                mb: 0.5,
              }}
            >
              Paciente
              <Box component="span" sx={{ color: 'error.main' }}>
                *
              </Box>
            </Typography>

            <Autocomplete
              fullWidth
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              options={listPatients}
              getOptionLabel={(patient) => patient.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register('patientId', {
                    required: 'Paciente é obrigatório',
                  })}
                  placeholder="Selecione um paciente"
                  size="small"
                />
              )}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Input
              {...register('date', {
                required: 'Data é obrigatório',
              })}
              label="Data"
              type="date"
              required
              placeholder={'00/00/0000'}
            />
            <Input label="Hora" type="time" required />
          </Box>
          <Input
            {...register('procedure', {
              required: 'Procedimento é obrigatório',
            })}
            label="Procedimento"
            type="text"
            required
            placeholder={'Ex: consulta clínica geral'}
          />

          <TextArea
            {...register('observations', {
              required: 'Observações são obrigatórias',
            })}
            label={'Observações'}
            type={'text'}
            required
            placeholder={'Anotações clínicas...'}
            // error={!!errors.observations}
            // helperText={errors.observations?.message}
          />

          <DialogActions>
            <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
              <OutlineButton onClick={onClose} type="button">
                Cancelar
              </OutlineButton>
              <CustomButton type="submit">Agendar Consulta</CustomButton>
            </Box>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddConsultation;
