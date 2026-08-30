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

          console.log('EDITANDO:');
          console.log('ID:', id);
          console.log('DATA:', data);
          console.log('RESULTADO:', updatedList);

          return {
            patientsList: updatedList,
          };
        });
      },
    }),
    {
      name: 'patientsList-storage',
    }
  )
);
