import projectLoopStudio from "../assets/project-loopstudios.webp";
import projectTodoList from "../assets/project-todo-app.webp";
import projectAdviceSlip from "../assets/project-advice-slip.webp";
import projectDevFinances from "../assets/project-dev-finances.webp";
import projectPokedex from "../assets/project-pokedex.webp";
import projectMiniPortfolio from "../assets/project-mini-portfolio.webp";
import projectGithubApi from "../assets/project-github-api.webp";

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "loopstudios",
        name: "Loopstudios Landing Page",
        description: "Landing page moderna e responsiva com design imersivo",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        image: projectLoopStudio,
        liveUrl: "https://loopstudio-r1jq88m7e-pablovianas.vercel.app/",
        githubUrl: "https://github.com/pablovianas/loopstudio-lp",
        featured: true,
    },
    {
        id: "todo-list",
        name: "Todo List",
        description: "Aplicação de gerenciamento de tarefas com notificações",
        technologies: [
            "React",
            "Styled Components",
            "TypeScript",
            "React Hot Toast",
        ],
        image: projectTodoList,
        liveUrl: "https://todolist-54uzhjgzv-pablovianas.vercel.app/",
        githubUrl: "https://github.com/pablovianas/todolist-ts",
        featured: true,
    },
    {
        id: "advice-generator",
        name: "Advice Generator",
        description: "Gerador de conselhos aleatórios consumindo API externa",
        technologies: [
            "React",
            "TypeScript",
            "Styled Components",
            "Advice Slip API",
        ],
        image: projectAdviceSlip,
        liveUrl: "https://advice-generator-62gcphasl-pablovianas.vercel.app/",
        githubUrl: "https://github.com/pablovianas/advice-generator-ts",
    },
    {
        id: "pokedex",
        name: "Pokedex",
        description: "Enciclopédia de Pokémon com busca e filtros",
        technologies: ["React", "TypeScript", "Styled Components", "PokeAPI"],
        image: projectPokedex,
        liveUrl: "https://pokedex-e1j33ukgc-pablovianas.vercel.app/",
        githubUrl: "https://github.com/pablovianas/pokedex-ts",
    },
    {
        id: "dev-finances",
        name: "Dev Finances",
        description: "Aplicação de controle financeiro pessoal",
        technologies: ["React", "Styled Components", "React Hot Toast"],
        image: projectDevFinances,
        githubUrl: "https://github.com/pablovianas/dev-finances",
    },
    {
        id: "mini-portfolio",
        name: "Mini Portfolio",
        description: "Portfolio minimalista e responsivo",
        technologies: ["React", "Styled Components"],
        image: projectMiniPortfolio,
        liveUrl: "https://mini-portfolio-rggz4kiu0-pablovianas.vercel.app/",
        githubUrl: "https://github.com/pablovianas/mini-portfolio",
    },
    {
        id: "github-api",
        name: "GitHub API",
        description: "Busca de perfis do GitHub com informações detalhadas",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: projectGithubApi,
        liveUrl: "https://pablovianas.github.io/github-api/",
        githubUrl: "https://github.com/pablovianas/github-api",
    },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
