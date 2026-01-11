import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleButton = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background: ${() => {
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";
        return isDark ? "#1a1a1a" : "#f3f4f6";
    }};
    border: 1px solid
        ${() => {
            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";
            return isDark ? "#27272a" : "#e4e4e7";
        }};
    color: ${() => {
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";
        return isDark ? "#e4e4e7" : "#18181b";
    }};
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        background: ${() => {
            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";
            return isDark ? "#27272a" : "#e5e7eb";
        }};
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

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;
