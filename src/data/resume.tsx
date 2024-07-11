import { Icons } from "@/components/icons";

export const DATA = {
  name: "Steven Ju",
  initials: "SJ",
  url: "https://stevenju.top",
  location: "Chengdu, Sichuan, CN",
  locationLink: "https://www.google.com/maps/place/chengdu",
  description:
    "I am a software engineer transitioning to a freelance developer. I enjoy building interesting products and helping others.",
  summary:
    "I have a diverse and inspiring journey that reflects my dedication and passion for programming. While working at a restaurant to make ends meet, I diligently studied programming after my shifts. My hard work paid off in 2018 when I secured my first job as a programmer, marking the beginning of my career in software development. Through continuous learning and persistent effort, I evolved into a full-stack engineer. Now, in my spare time, I enjoy building innovative products with the hope of helping others and making a positive impact.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Vue",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
  ],
  contact: {
    email: "mailto:steven.zhu.email@gmail.com",
    tel: "",
    social: {
      GitHub: {
        url: "https://github.com/123seven",
        icon: Icons.github,
      },
      Gmail: {
        url: "mailto:steven.zhu.email@gmail.com",
        icon: Icons.gmail,
      },
      // X: {
      //   url: "https://x.com/stevenju",
      //   icon: Icons.x,
      // },
      // Youtube: {
      //   url: "https://youtube.com/c/stevenju",
      //   icon: Icons.youtube,
      // },
    },
  },

  work: [],
  education: [],
  projects: [
    {
      title: "BestFit AI",
      href: "https://bestfitai.vercel.app",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Discover BestFitAI, the ultimate AI-powered fitness companion. Get personalized workout plans, real-time guidance, and adaptive training programs tailored to your goals. Experience the future of fitness with our smart, digital personal trainer.",
      technologies: [
        "Next.js",
        "React",
        "Shadcn UI",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Cloudflare Workers",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://bestfitai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/bestfitai.mp4",
    },
    {
      title: "UseFast",
      href: "https://usefast.vercel.app",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "UseFast one-stop solution, ChatGPT subscription, OpenAI, ChatGPT Plus",
      technologies: [
        "Next.js",
        "React",
        "Shadcn UI",
        "Typescript",
        "TailwindCSS",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://usefast.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/usefa.mp4",
    },
    {
      title: "Poke",
      href: "",
      dates: "July 2023 - September 2023",
      active: true,
      description:
        "Easy, Simple, and Efficient Integrated Authentication and User Management Features.",
      technologies: [
        "Typescript",
        "React",
        "TailwindCSS",
        "Headlessui/",
        "Python",
        "FastAPI",
        "SQLite3",
        "Docker",
      ],
      links: [],
      image: "",
      video: "/poke.mp4",
    },
    {
      title: "OpenChat",
      href: "open-chat-beta.vercel.app",
      dates: "February 2023 - March 2023",
      active: true,
      description: "A ChatGPT chat client implemented in Vue3 & FastAPI",
      technologies: [
        "Nuxt.js",
        "Vue",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://open-chat-beta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/123seven/SmartChat-Beta",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/openchat.jpg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
