export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
  color?: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: 'html5',
    category: 'languages',
    color: '#E34F26'
  },
  {
    name: 'CSS3',
    icon: 'css3',
    category: 'languages',
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    category: 'languages',
    color: '#F7DF1E'
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'languages',
    color: '#3178C6'
  },
  {
    name: 'Python',
    icon: 'python',
    category: 'languages',
    color: '#3670A0'
  },
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    icon: 'nextdotjs',
    category: 'frontend',
    color: '#000000'
  },
  {
    name: 'Styled Components',
    icon: 'styledcomponents',
    category: 'frontend',
    color: '#DB7093'
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwindcss',
    category: 'frontend',
    color: '#06B6D4'
  },
  {
    name: 'Bootstrap',
    icon: 'bootstrap',
    category: 'frontend',
    color: '#7952B3'
  },
  {
    name: 'React Query',
    icon: 'reactquery',
    category: 'frontend',
    color: '#FF4154'
  },
  {
    name: 'React Router',
    icon: 'reactrouter',
    category: 'frontend',
    color: '#CA4245'
  },
  {
    name: 'React Hook Form',
    icon: 'reacthookform',
    category: 'frontend',
    color: '#EC5990'
  },
  {
    name: 'Node.js',
    icon: 'nodedotjs',
    category: 'backend',
    color: '#339933'
  },
  {
    name: 'Express.js',
    icon: 'express',
    category: 'backend',
    color: '#404d59'
  },
  {
    name: 'JWT',
    icon: 'jwt',
    category: 'backend',
    color: '#000000'
  },
  {
    name: 'SQLite',
    icon: 'sqlite',
    category: 'database',
    color: '#003B57'
  },
  {
    name: 'MySQL',
    icon: 'mysql',
    category: 'database',
    color: '#4479A1'
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    category: 'database',
    color: '#4169E1'
  },
  {
    name: 'Git',
    icon: 'git',
    category: 'tools',
    color: '#F05033'
  },
  {
    name: 'GitHub',
    icon: 'github',
    category: 'tools',
    color: '#181717'
  },
  {
    name: 'VS Code',
    icon: 'vscode',
    category: 'tools',
    color: '#0078d7'
  },
  {
    name: 'Figma',
    icon: 'figma',
    category: 'tools',
    color: '#F24E1E'
  },
  {
    name: 'Vite',
    icon: 'vite',
    category: 'tools',
    color: '#646CFF'
  },
  {
    name: 'npm',
    icon: 'npm',
    category: 'tools',
    color: '#CB3837'
  },
  {
    name: 'Yarn',
    icon: 'yarn',
    category: 'tools',
    color: '#2C8EBB'
  },
  {
    name: 'Postman',
    icon: 'postman',
    category: 'tools',
    color: '#FF6C37'
  },
  {
    name: 'Insomnia',
    icon: 'insomnia',
    category: 'tools',
    color: '#5849BE'
  }
];

export const skillCategories = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & DevOps'
} as const;

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};

export const getAllCategories = () => {
  return Object.keys(skillCategories) as Array<keyof typeof skillCategories>;
};