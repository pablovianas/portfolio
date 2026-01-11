import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    font-synthesis: none;
    src: url('/fonts/Inter-VariableFont_opsz,wght.woff2') format('woff2');
  }
    @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    font-synthesis: none;
    src: url('/fonts/Inter-Italic-VariableFont_opsz,wght.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-optical-sizing: auto;
    font-variation-settings: "opsz" 32;
    letter-spacing: 1.2px;
    
    color-scheme: ${({ $isDark }) => ($isDark ? "dark" : "light")};
  }

  html {
    scroll-behavior: smooth;
  }

  html[data-theme='dark'] {
    --bg-primary: #0a0a0a;
    --bg-secondary: #18181b;
    --bg-tertiary: #27272a;
    --text-primary: #e4e4e7;
    --text-secondary: #a1a1aa;
    --text-tertiary: #71717a;
    --border-primary: #27272a;
    --border-secondary: #3f3f46;
    --accent-primary: #3b82f6;
    --accent-secondary: #8b5cf6;
  }

  html[data-theme='light'] {
    --bg-primary: #ffffff;
    --bg-secondary: #f4f4f5;
    --bg-tertiary: #e4e4e7;
    --text-primary: #18181b;
    --text-secondary: #52525b;
    --text-tertiary: #71717a;
    --border-primary: #e4e4e7;
    --border-secondary: #d4d4d8;
    --accent-primary: #2563eb;
    --accent-secondary: #7c3aed;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background-color: var(--accent-primary);
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
