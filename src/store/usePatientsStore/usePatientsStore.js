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
    }),
    {
      name: 'patientsList-storage',
    }
  )
);
