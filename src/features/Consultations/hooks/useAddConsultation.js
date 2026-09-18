import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useForm } from 'react-hook-form';

export const useAddConsultation = ({ patientId, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addConsultation = usePatientsStore((state) => state.addConsultation);

  const handleAddConsultation = (data) => {
    const appointments = {
      id: Date.now(),
      ...data,
    };

    alert('Consulta agendada com sucesso!');
    addConsultation(patientId, appointments);
    reset();
    onClose();
  };
  return { handleAddConsultation, register, handleSubmit, errors };
};
