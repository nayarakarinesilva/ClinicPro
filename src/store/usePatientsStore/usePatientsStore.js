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

          console.log('ANTES:', state.patientsList);
          console.log('ID EDITADO:', id);
          console.log('DATA NOVA:', data);
          console.log('DEPOIS:', updatedList);

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
