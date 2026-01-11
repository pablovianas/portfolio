import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header<{ $isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);

    ${({ $isScrolled }) =>
        $isScrolled &&
        `
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(10, 10, 10, 0.8);
    border-bottom: 1px solid var(--border-primary);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `}

    html[data-theme='light'] & {
        ${({ $isScrolled }) =>
            $isScrolled &&
            `
      background: rgba(255, 255, 255, 0.8);
    `}
    }
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (min-width: 1024px) {
        padding: 1.5rem 3rem;
    }
`;

export const Logo = styled(motion.button)`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--text-primary);

    .accent {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
    @media (max-width: 1023px) {
        position: fixed;
        top: 5rem;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        border-bottom: 1px solid var(--border-primary);
        padding: 2rem 1.5rem;
        transform: ${({ $isOpen }) =>
            $isOpen ? "translateY(0)" : "translateY(-100%)"};
        opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
        visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
        transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1023px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const NavLink = styled.button`
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover {
        color: var(--text-primary);

        &::after {
            width: 100%;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const SocialLink = styled(motion.a)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-secondary);
    transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1);

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        color: var(--accent-primary);
    }
`;

export const MobileMenuButton = styled(motion.button)`
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-primary);
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 1023px) {
        display: flex;
    }
`;
