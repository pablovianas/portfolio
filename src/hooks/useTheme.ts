import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return true;
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
};