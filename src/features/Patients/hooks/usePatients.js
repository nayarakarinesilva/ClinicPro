'use client';

import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const usePatients = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addPatients = usePatientsStore((state) => state.addPatient);
  const ListPatients = usePatientsStore((state) => state.patientsList);

  const router = useRouter();

  const handleAddPatients = (data) => {
    const hasPatient = ListPatients.some(
      (patient) => patient.document_cpf === data.document_cpf
    );

    if (hasPatient) {
      alert('Já tem um paciente com esse documento cadastrado');
      return;
    }

    const patient = {
      name: data.name,
      date_birth: data.date_birth,
      document_cpf: data.document_cpf,
      phone: data.phone,
      email: data.email,
      text_notes: data.text_notes,
    };

    //Adicionar novo paciente
    addPatients(patient);

    alert('Cadastro realizado com sucesso!');

    console.log('patient', patient);

    // reset();
    // router.push('pacientes');
  };

  return {
    register,
    handleSubmit,
    handleAddPatients,
    errors,
  };
};
