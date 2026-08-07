import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      users: [],

      register: (newUser) => {
        set({
          users: [...get().users, newUser],
        });
      },

      login: (user) => set({ user }),

      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
