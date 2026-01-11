import styled from "styled-components";
import { motion } from "framer-motion";

interface ButtonProps {
    $variant?: "primary" | "secondary" | "ghost";
    $size?: "sm" | "md" | "lg";
}

export const Button = styled(motion.button)<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    border: none;

    ${({ $size = "md" }) => {
        switch ($size) {
            case "sm":
                return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
            case "lg":
                return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
            default:
                return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
        }
    }}

    ${({ $variant = "primary" }) => {
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";

        switch ($variant) {
            case "primary":
                return `
          background: ${isDark ? "#3b82f6" : "#2563eb"};
          color: #ffffff;
          
          &:hover {
            background: ${isDark ? "#2563eb" : "#1d4ed8"};
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
            case "secondary":
                return `
          background: ${isDark ? "#1a1a1a" : "#f3f4f6"};
          color: ${isDark ? "#e4e4e7" : "#18181b"};
          border: 1px solid ${isDark ? "#27272a" : "#e4e4e7"};
          
          &:hover {
            background: ${isDark ? "#27272a" : "#e5e7eb"};
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
            case "ghost":
                return `
          background: transparent;
          color: ${isDark ? "#a1a1aa" : "#52525b"};
          
          &:hover {
            background: ${isDark ? "#1a1a1a" : "#f3f4f6"};
            color: ${isDark ? "#e4e4e7" : "#18181b"};
          }
        `;
        }
    }}
  
  &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    &:focus-visible {
        outline: 2px solid
            ${() => {
                const isDark =
                    document.documentElement.getAttribute("data-theme") ===
                    "dark";
                return isDark ? "#3b82f6" : "#2563eb";
            }};
        outline-offset: 2px;
    }
`;
