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
    icon: any;
    category: 'languages' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export const skills: Skill[] = [
    { name: 'HTML5', icon: SiHtml5, category: 'languages' },
    { name: 'CSS3', icon: SiCss3, category: 'languages' },
    { name: 'JavaScript', icon: SiJavascript, category: 'languages' },
    { name: 'TypeScript', icon: SiTypescript, category: 'languages' },
    { name: 'Python', icon: SiPython, category: 'languages' },

    { name: 'React', icon: SiReact, category: 'frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
    { name: 'Styled Components', icon: SiStyledcomponents, category: 'frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend' },
    { name: 'Bootstrap', icon: SiBootstrap, category: 'frontend' },
    { name: 'React Query', icon: SiReactquery, category: 'frontend' },
    { name: 'React Router', icon: SiReactrouter, category: 'frontend' },
    { name: 'React Hook Form', icon: SiReacthookform, category: 'frontend' },
    { name: 'Vite', icon: SiVite, category: 'frontend' },
    { name: 'Vitest', icon: SiVitest, category: 'frontend' },

    { name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
    { name: 'Express', icon: SiExpress, category: 'backend' },
    { name: 'FastAPI', icon: SiFastapi, category: 'backend' },
    { name: 'JWT', icon: SiJsonwebtokens, category: 'backend' },

    { name: 'MySQL', icon: SiMysql, category: 'database' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'database' },
    { name: 'SQLite', icon: SiSqlite, category: 'database' },
    { name: 'Prisma', icon: SiPrisma, category: 'database' },

    { name: 'Git', icon: SiGit, category: 'devops' },
    { name: 'GitHub', icon: SiGithub, category: 'devops' },
    { name: 'GitLab', icon: SiGitlab, category: 'devops' },
    { name: 'Azure DevOps', icon: SiAzuredevops, category: 'devops' },
    { name: 'Docker', icon: SiDocker, category: 'devops' },
    { name: 'Grafana', icon: SiGrafana, category: 'devops' },

    { name: 'VS Code', icon: SiVisualstudiocode, category: 'tools' },
    { name: 'Figma', icon: SiFigma, category: 'tools' },
    { name: 'Postman', icon: SiPostman, category: 'tools' },
    { name: 'Insomnia', icon: SiInsomnia, category: 'tools' },
    { name: 'npm', icon: SiNpm, category: 'tools' },
    { name: 'Yarn', icon: SiYarn, category: 'tools' },
    { name: 'Jest', icon: SiJest, category: 'tools' },
    { name: 'Cypress', icon: SiCypress, category: 'tools' },
    { name: 'Playwright', icon: SiPlaywright, category: 'tools' },
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