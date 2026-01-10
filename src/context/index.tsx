import { createContext, useContext, ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';
import { GlobalStyle } from '../styles/globalStyle';

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <GlobalStyle $isDark={isDark} />
      {children}
    </ThemeContext.Provider>
  );
};