import styled, { css } from "styled-components";

const footerLinkStyles = css`
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: var(--text-secondary);
    text-decoration: none;
    cursor: pointer;
    transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        color: #3b82f6;
    }
`;

export const Footer = styled.footer`
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-primary);
    padding: 4rem 0 2rem;
    margin-top: 6rem;
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
        padding: 0 3rem;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: 1.5fr 2fr 1fr;
    }

    @media (max-width: 767px) {
        text-align: center;
    }
`;

export const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const BrandName = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;

    .accent {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const BrandTagline = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
    max-width: 300px;

    @media (max-width: 767px) {
        margin: 0 auto;
    }
`;

export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FooterSectionTitle = styled.h4`
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
`;

export const FooterLinkList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const FooterLinkItem = styled.li``;

export const FooterButton = styled.button`
    ${footerLinkStyles}
`;

export const FooterLink = styled.a`
    ${footerLinkStyles}
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    border-radius: 0.5rem;
    transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        color: #3b82f6;
        background: var(--bg-primary);
    }
`;

export const FooterDivider = styled.div`
    height: 1px;
    background: var(--border-primary);
`;

export const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 767px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Copyright = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: #ef4444;
        fill: #ef4444;
    }
`;

export const BackToTop = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-primary);
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        color: #ffffff;
        border-color: transparent;
    }
`;
