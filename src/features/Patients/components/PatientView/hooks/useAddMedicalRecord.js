import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useForm } from 'react-hook-form';

export const useAddMedicalRecord = (patientId, onClose) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addMedicalRecord = usePatientsStore((state) => state.addMedicalRecord);

  const handleAddMedicalRecord = (data) => {
    
    const medicalRecord = {
      id: Date.now(),
      ...data,
    };

    alert('Cadastro de procedimento realizado com sucesso!');
    addMedicalRecord(patientId, medicalRecord);
    reset();
    onClose();
  };

  return { register, handleSubmit, errors, handleAddMedicalRecord };
};
