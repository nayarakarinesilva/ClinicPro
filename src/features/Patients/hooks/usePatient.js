import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';

export const usePatient = (patientId) => {
  const patientsList = usePatientsStore((state) => state.patientsList);

  const patient = patientsList.find(
    (patient) => Number(patient.id) === Number(patientId)
  );
  return patient;
};
