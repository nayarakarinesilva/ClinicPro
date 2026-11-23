import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useConsultations = ({ patientId } = {}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addConsultation = usePatientsStore((state) => state.addConsultation);
  const editConsultation = usePatientsStore((state) => state.editConsultation);

  const handleAddConsultation = (data) => {
    const appointments = {
      id: Date.now(),
      ...data,
    };

    alert('Consulta agendada com sucesso!');
    addConsultation(patientId, appointments);
    reset();
    router.push('/consulta');
  };

  const handleEditConsultation = (patientId, consultationId, data) => {
    alert('Editado com sucesso!');
    editConsultation(patientId, consultationId, data);
    router.push('/consulta');
  };

  return {
    handleAddConsultation,
    handleEditConsultation,
    register,
    handleSubmit,
    errors,
    reset,
  };
};
