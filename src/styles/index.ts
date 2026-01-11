export const theme = {
    colors: {
        dark: {
            bg: {
                primary: "#0a0a0a",
                secondary: "#111111",
                tertiary: "#1a1a1a",
            },
            text: {
                primary: "#e4e4e7",
                secondary: "#25254bff",
                muted: "#71717a",
            },
            accent: {
                primary: "#3b82f6",
                secondary: "#8b5cf6",
                gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            },
            border: "#27272a",
            success: "#10b981",
            warning: "#f59e0b",
        },
        light: {
            bg: {
                primary: "#ffffff",
                secondary: "#f9fafb",
                tertiary: "#f3f4f6",
            },
            text: {
                primary: "#18181b",
                secondary: "#52525b",
                muted: "#a1a1aa",
            },
            accent: {
                primary: "#2563eb",
                secondary: "#7c3aed",
                gradient: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
            },
            border: "#e4e4e7",
            success: "#10b981",
            warning: "#f59e0b",
        },
    },

    fonts: {
        body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        heading:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "'JetBrains Mono', 'Courier New', monospace",
    },

    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
    },

    fontWeights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },

    spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
        "4xl": "8rem",
    },

    breakpoints: {
        mobile: "640px",
        tablet: "1024px",
        desktop: "1280px",
    },

    transitions: {
        fast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
        normal: "300ms cubic-bezier(0.16, 1, 0.3, 1)",
        slow: "500ms cubic-bezier(0.16, 1, 0.3, 1)",
    },

    shadows: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
    },

    radii: {
        sm: "0.25rem",
        base: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
    },
};

export type Theme = typeof theme;

export const themes = {
    light: {
        primaryBackground: "#FFFFFF",
        secondaryBackground: "#F5F5F5",
        text: "#333333",
        accent: "#555555",
        link: "#333333",
    },
    dark: {
        primaryBackground: "#222222",
        secondaryBackground: "#333333",
        text: "#FFFFFF",
        accent: "#FFFFFF",
        link: "#777777",
    },
    blue: {
        primaryBackground: "#E6F7FF",
        secondaryBackground: "#C3E6FF",
        text: "#333333",
        accent: "#007BFF",
        link: "#0056b3",
    },
    green: {
        primaryBackground: "#E6FFE6",
        secondaryBackground: "#C3FFC3",
        text: "#333333",
        accent: "#28A745",
        link: "#1c7430",
    },
    orange: {
        primaryBackground: "#FFF3E6",
        secondaryBackground: "#FFD9B3",
        text: "#333333",
        accent: "#FFA500",
        link: "#b36700",
    },
};
