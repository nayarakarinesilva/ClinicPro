import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePatientsStore = create(
  persist(
    (set, get) => ({
      patientsList: [],
      addPatient: (newPatient) => {
        set({
          patientsList: [...get().patientsList, newPatient],
        });
      },
      //Precisa do state pra pegar o estado atual no contexto
      editPatient: (id, data) => {
        set((state) => {
          const updatedList = state.patientsList.map((patient) =>
            Number(patient.id) === Number(id)
              ? { ...patient, ...data }
              : patient
          );
          return {
            patientsList: updatedList,
          };
        });
      },

      addMedicalRecord: (patientId, medicalRecord) => {
        set((state) => {
          // Percorre a lista de pacientes para encontrar o paciente pelo ID
          const updatedPatient = state.patientsList.map((patient) => {
            if (Number(patient.id) === Number(patientId)) {
              return {
                // Mantém todos os dados que o paciente já possui
                ...patient,
                // Cria uma nova lista de prontuários
                medicalRecord: [
                  // Mantém os prontuários que o paciente já possui
                  ...patient.medicalRecord,
                  // Adiciona o novo prontuário
                  medicalRecord,
                ],
              };
            }
            // Se não for o paciente procurado, mantém o paciente como está
            return patient;
          });
          // Atualiza a lista de pacientes com o paciente alterado
          return {
            patientsList: updatedPatient,
          };
        });
      },
    }),
    {
      name: 'patientsList-storage',
    }
  )
);
