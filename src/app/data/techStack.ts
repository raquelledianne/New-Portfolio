import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiStripe,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiFigma,
  SiVercel,
} from "react-icons/si";

export const techStack = [
  { name: "React", category: "Frontend", icon: FaReact },
  { name: "Next.js", category: "Framework", icon: SiNextdotjs },
  { name: "Node.js", category: "Backend", icon: FaNodeJs },
  { name: "HTML5", category: "Markup" },
  { name: "CSS", category: "Styling" },
  { name: "JavaScript", category: "Language", icon: SiJavascript },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "Redux", category: "State Management", icon: SiRedux },
  { name: "REST APIs", category: "Networking" },
  { name: "Stripe", category: "Payments", icon: SiStripe },

  { name: "Firebase", category: "Backend / BaaS", icon: SiFirebase },
  { name: "Supabase", category: "Backend / BaaS", icon: SiSupabase },
  { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
  { name: "Figma", category: "Design", icon: SiFigma },
  { name: "Git", category: "Version Control", icon: FaGitAlt },
  { name: "Vercel", category: "Deployment", icon: SiVercel },
];