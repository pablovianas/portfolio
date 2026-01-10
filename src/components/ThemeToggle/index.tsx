import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../../context';
import * as S from './style';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <S.ToggleButton
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </S.ToggleButton>
  );
};