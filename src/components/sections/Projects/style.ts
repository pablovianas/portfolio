import styled from "styled-components";

export const ProjectsSection = styled.section`
    min-height: 100vh;
    padding: 6rem 0;
    position: relative;
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
        padding: 0 3rem;
    }
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;

    background: linear-gradient(
        135deg,
        var(--text-primary) 0%,
        var(--text-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const SectionDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        border-color: #3b82f6;
    }
`;

export const ProjectImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: var(--bg-tertiary);
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);

    ${ProjectCard}:hover & {
        transform: scale(1.05);
        filter: brightness(0.7);
    }
`;

export const ProjectOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 300ms cubic-bezier(0.16, 1, 0.3, 1);

    ${ProjectCard}:hover & {
        opacity: 1;
    }
`;

export const ProjectLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
`;

export const ProjectContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
`;

export const ProjectTitle = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
`;

export const ProjectDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    flex: 1;
`;

export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TechTag = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid var(--border-primary);
    transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        color: #3b82f6;
        border-color: #3b82f6;
    }
`;
