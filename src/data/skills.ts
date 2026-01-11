import { IconType } from 'react-icons';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython,
    SiReact, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiBootstrap,
    SiReactquery, SiReactrouter, SiReacthookform, SiVite, SiVitest,
    SiNodedotjs, SiExpress, SiFastapi, SiJsonwebtokens,
    SiMysql, SiPostgresql, SiSqlite, SiPrisma,
    SiGit, SiGithub, SiGitlab, SiAzuredevops, SiDocker, SiGrafana,
    SiVisualstudiocode, SiFigma, SiPostman, SiInsomnia, SiNpm, SiYarn,
    SiJest, SiCypress, SiPlaywright
} from 'react-icons/si';

export interface Skill {
    name: string;
    icon: IconType;
    category: 'languages' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export const skills: Skill[] = [
    { name: 'HTML5', icon: SiHtml5 as IconType, category: 'languages' },
    { name: 'CSS3', icon: SiCss3 as IconType, category: 'languages' },
    { name: 'JavaScript', icon: SiJavascript as IconType, category: 'languages' },
    { name: 'TypeScript', icon: SiTypescript as IconType, category: 'languages' },
    { name: 'Python', icon: SiPython as IconType, category: 'languages' },

    { name: 'React', icon: SiReact as IconType, category: 'frontend' },
    { name: 'Next.js', icon: SiNextdotjs as IconType, category: 'frontend' },
    { name: 'Styled Components', icon: SiStyledcomponents as IconType, category: 'frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss as IconType, category: 'frontend' },
    { name: 'Bootstrap', icon: SiBootstrap as IconType, category: 'frontend' },
    { name: 'React Query', icon: SiReactquery as IconType, category: 'frontend' },
    { name: 'React Router', icon: SiReactrouter as IconType, category: 'frontend' },
    { name: 'React Hook Form', icon: SiReacthookform as IconType, category: 'frontend' },
    { name: 'Vite', icon: SiVite as IconType, category: 'frontend' },
    { name: 'Vitest', icon: SiVitest as IconType, category: 'frontend' },

    { name: 'Node.js', icon: SiNodedotjs as IconType, category: 'backend' },
    { name: 'Express', icon: SiExpress as IconType, category: 'backend' },
    { name: 'FastAPI', icon: SiFastapi as IconType, category: 'backend' },
    { name: 'JWT', icon: SiJsonwebtokens as IconType, category: 'backend' },

    { name: 'MySQL', icon: SiMysql as IconType, category: 'database' },
    { name: 'PostgreSQL', icon: SiPostgresql as IconType, category: 'database' },
    { name: 'SQLite', icon: SiSqlite as IconType, category: 'database' },
    { name: 'Prisma', icon: SiPrisma as IconType, category: 'database' },

    { name: 'Git', icon: SiGit as IconType, category: 'devops' },
    { name: 'GitHub', icon: SiGithub as IconType, category: 'devops' },
    { name: 'GitLab', icon: SiGitlab as IconType, category: 'devops' },
    { name: 'Azure DevOps', icon: SiAzuredevops as IconType, category: 'devops' },
    { name: 'Docker', icon: SiDocker as IconType, category: 'devops' },
    { name: 'Grafana', icon: SiGrafana as IconType, category: 'devops' },

    { name: 'VS Code', icon: SiVisualstudiocode as IconType, category: 'tools' },
    { name: 'Figma', icon: SiFigma as IconType, category: 'tools' },
    { name: 'Postman', icon: SiPostman as IconType, category: 'tools' },
    { name: 'Insomnia', icon: SiInsomnia as IconType, category: 'tools' },
    { name: 'npm', icon: SiNpm as IconType, category: 'tools' },
    { name: 'Yarn', icon: SiYarn as IconType, category: 'tools' },
    { name: 'Jest', icon: SiJest as IconType, category: 'tools' },
    { name: 'Cypress', icon: SiCypress as IconType, category: 'tools' },
    { name: 'Playwright', icon: SiPlaywright as IconType, category: 'tools' },
];

export const skillCategories = {
    languages: 'Linguagens',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Banco de Dados',
    devops: 'DevOps & Cloud',
    tools: 'Ferramentas'
};

export const getSkillsByCategory = (category: Skill['category']) =>
    skills.filter(skill => skill.category === category);

export const getAllCategories = () =>
    Object.keys(skillCategories) as Skill['category'][];