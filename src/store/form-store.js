import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useZustandStore = create(
  persist(
    (set) => ({
      zustandState: false,
      nameUser:'',                  
      setZustandState: (value) => set({ zustandState: value }),
      setNameUser: (value) => set({ nameUser: value }),
    }),
    {
      name: 'form-storage',
    }
  )
);

export {useZustandStore};
