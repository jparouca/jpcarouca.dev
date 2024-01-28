import {
  Github,
  Twitter,
  LinkedinIcon,
  GanttChart,
  SparklesIcon,
  NotebookPen,
  Wrench,
  Workflow,
} from "lucide-react";

export const SOCIALS = {
  github: {
    title: "GitHub",
    url: "https://github.com/jparouca",
    icon: <Github size={16} />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jparouca",
    icon: <LinkedinIcon size={16} />,
  },
  twitter: {
    title: "Twitter",
    username: "kaxo_ta",
    url: "https://twitter.com/kaxo_ta",
    icon: <Twitter size={16} />,
  },
};

export const LINKS = [{}];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;
export const SUPABASE_TABLE_NAME = "pages";
