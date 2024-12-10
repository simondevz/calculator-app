import { create } from "zustand";

interface ThemeState {
  theme: number;
  setTheme: (index: number) => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  theme: 0,
  setTheme: (index) => set(() => ({ theme: index })),
}));

export default useThemeStore;
