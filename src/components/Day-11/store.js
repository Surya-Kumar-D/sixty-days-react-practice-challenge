import { create } from "zustand";

export const useStore = create((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
