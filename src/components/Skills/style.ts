import styled from 'styled-components';

export const SkillsSection = styled.section`
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
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CategoryTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border-primary);
  
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 1rem;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  &:hover {
    background: var(--bg-tertiary);
    border-color: #3b82f6;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);

  ${SkillCard}:hover & {
    color: #3b82f6;
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const SkillName = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
  transition: color 200ms cubic-bezier(0.16, 1, 0.3, 1);

  ${SkillCard}:hover & {
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;