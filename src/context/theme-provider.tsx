import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import { GlobalStyle } from "../styles/globalStyle";
import { ThemeContext } from "./theme-context";

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
