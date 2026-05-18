import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import BarepapersLogo from "../images/logos/barepapers.svg";
import Minimal from "../images/logos/minimal.svg";
import ParabolLogo from "../images/logos/parabol.svg";

export const RESUME_DATA = {
  name: "Lazaro Rodriguez",
  initials: "LR",
  location: "Mérida, Yucatán, México",
  locationLink: "https://www.google.com/maps/place/M%C3%A9rida,+Yuc",
  about:
    "Frontend Developer with 1 year of practical experience building web applications, primarily focused on React.js, JavaScript, and TypeScript. Eager to contribute to team projects while continuously strengthening my skills in modern web technologies.",
  summary:
    "Focused on building responsive user interfaces, writing clean components, and integrating RESTful APIs. Enthusiastic about solving UI challenges, optimizing web performance, and learning development best practices within agile teams.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E35AQHuE4f6fIB0xg/profile-framedphoto-shrink_800_800/B4EZxd7oDLKsAg-/0/1771102437907?e=1779735600&v=beta&t=qxKzECJqbyfdTPQ5eJABarExmrnHcnm3N_SYfqxmB2Y",
  contact: {
    email: "lazarorodriguezleyva@gmail.com",
    tel: "+52 9992475721",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lrodriguez05",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lazaro-rodriguez-leyva/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "CUJAE - Specialized Technical Center",
      degree: "Higher Technical Certificate in Systems Engineering",
      start: "2020",
      end: "2024",
      description:
        "Completed a four-year specialized technical program focused directly on software development, web technologies, and database fundamentals. Gained hands-on programming experience with JavaScript and core software design principles.",
    },
  ],

  work: [
    {
      company: "Freelance / Frontend Developer",
      link: "",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: Minimal,
      start: "2025",
      end: "Present",
      description:
        "Developed and deployed production-ready web applications focusing on responsive design and performance optimization. Built reusable UI components with React.js and TypeScript, integrated REST APIs, and managed application state using Context API. Ensured high-quality code delivery using Git workflows and code reviews.",
    },
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js / Next.js",
    "HTML5 & CSS3 / Tailwind CSS",
    "State Management (Context API / Redux)",
    "RESTful APIs / Axios",
    "Git & GitHub",
    "Node.js & SQLite (Basic)",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      techStack: ["React.js", "Vite", "Tailwind CSS"],
      description:
        "A highly responsive portfolio website optimized for core web vitals and modern UI standards.",
      logo: Minimal,
      link: {
        label: "portfolio-v2-rho-rouge.vercel.app",
        href: "https://portfolio-v2-rho-rouge.vercel.app/",
      },
    },
    {
      title: "AI Chat Web App",
      techStack: ["React.js", "TypeScript", "Node.js", "REST API"],
      description:
        "An interactive AI-powered chat application featuring real-time state updates, asynchronous data fetching, and an intuitive UI.",
      logo: BarepapersLogo,
      link: {
        label: "github.com/lrodriguez05/second-project-client",
        href: "https://github.com/lrodriguez05/second-project-client",
      },
    },
    {
      title: "Library Administration Panel",
      techStack: ["React.js", "Context API", "JavaScript", "REST API"],
      description:
        "A comprehensive dashboard for book inventory management, utilizing advanced state handling and CRUD operations with API integration.",
      logo: ParabolLogo,
      link: {
        label: "github.com/lrodriguez05/library-front",
        href: "https://github.com/lrodriguez05/library-front",
      },
    },
  ],
} as const;
