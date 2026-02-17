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
    "Full Stack Developer with two years of experience specializing in building web applications using React.js, Node.js, JavaScript, and SQLite. Passionate about creating efficient, clean, and maintainable code while continuously learning modern web development practices.",
  summary:
    "With a solid foundation in React.js, Node.js, and JavaScript, I have developed several personal and academic projects that showcase my problem-solving skills and attention to detail. My experience includes building interactive UIs, managing data with SQLite, and developing backend logic. I thrive in environments where I can combine technical precision with creative solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E35AQHuE4f6fIB0xg/profile-framedphoto-shrink_200_200/B4EZxd7oDLKsAY-/0/1771102437907?e=1771718400&v=beta&t=g8heNTuI5q7z3__xzJ9dRsOaP45yDIsEYwOF-q60mhU",
  contact: {
    email: "lazarorodriguezleyva@gmail.com",
    tel: "+52 99922475721",
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
      school: "CUJAE - Faculty of Systems Engineering",
      degree: "Technical Studies in Systems Engineering",
      start: "2020",
      end: "2024",
      description:
        "Completed a comprehensive four-year technical program focused on software development, databases, and web technologies. Gained hands-on experience in programming with JavaScript, Node.js, and foundational software engineering principles.",
    },
  ],

  work: [
    {
      company: "Freelance / Personal Projects",
      link: "",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: Minimal,
      start: "2024",
      end: "Present",
      description:
        "Developed personal projects and prototypes using React.js, Node.js, JavaScript, and SQLite. Focused on creating responsive front-end interfaces, managing local databases, and integrating backend logic. Gained practical experience in the full software development lifecycle through self-directed learning and experimentation.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js / Next.js",
    "Node.js",
    "SQLite",
    "HTML & CSS",
    "RESTful APIs",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      techStack: ["React.js", "Vite", "JavaScript"],
      description:
        "A personal portfolio website to showcase my skills and projects.",
      logo: Minimal,
      link: {
        label: "portfolio-v2-rho-rouge.vercel.app",
        href: "https://portfolio-v2-rho-rouge.vercel.app/",
      },
    },
    {
      title: "Chat Web App",
      techStack: ["React.js", "Node.js", "SQLite"],
      description:
        "An AI-powered chat application built with React.js and Node.js.",
      logo: BarepapersLogo,
      link: {
        label: "github.com/lrodriguez05/second-project-client",
        href: "https://github.com/lrodriguez05/second-project-client",
      },
    },
    {
      title: "Library Administration Panel",
      techStack: ["React.js", "API integration", "JavaScript"],
      description:
        "A dashboard for managing library operations, including book inventory and user management.",
      logo: ParabolLogo,
      link: {
        label: "github.com/lrodriguez05/library-front",
        href: "https://github.com/lrodriguez05/library-front",
      },
    },
  ],
} as const;
