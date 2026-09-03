import { useForm } from 'react-hook-form';

const useAddMedicalRecord = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddMedicalRecord=()=>{
    
  }

  return { register, handleSubmit, errors };
};
