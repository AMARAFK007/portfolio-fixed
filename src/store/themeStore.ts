import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: true, // Default to dark mode
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setTheme: (isDark: boolean) => set({ isDarkMode: isDark }),
    }),
    {
      name: 'theme-storage',
    }
  )
);