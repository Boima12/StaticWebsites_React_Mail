import { create } from 'zustand';

export const useBoxAlpha = create((set) => ({

    currentMailIndex: 2,
    setCurrentMailIndex: (index) => set({ currentMailIndex: index }),

}));