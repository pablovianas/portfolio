import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
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
    
    color-scheme: ${({ $isDark }) => ($isDark ? 'dark' : 'light')};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: ${({ $isDark }) => ($isDark ? '#e4e4e7' : '#18181b')};
    background-color: ${({ $isDark }) => ($isDark ? '#0a0a0a' : '#ffffff')};
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
    color: ${({ $isDark }) => ($isDark ? '#e4e4e7' : '#18181b')};
  }

  p {
    color: ${({ $isDark }) => ($isDark ? '#a1a1aa' : '#52525b')};
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
    background-color: ${({ $isDark }) => ($isDark ? '#3b82f6' : '#2563eb')};
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid ${({ $isDark }) => ($isDark ? '#3b82f6' : '#2563eb')};
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