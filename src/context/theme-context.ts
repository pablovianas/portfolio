import { useContext, createContext } from "react";

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};