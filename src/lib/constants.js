import {
  Github,
  Twitter,
  LinkedinIcon,
  GanttChart,
  Home,
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

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <Home size={16} />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <NotebookPen size={16} />,
  },
  {
    href: "/timeline",
    label: "Timeline",
    icon: <GanttChart size={16} />,
  },
  {
    href: "/utils",
    label: "Utils",
    icon: <Wrench size={16} />,
  },
  {
    href: "/workflow",
    label: "Conf files / Setup",
    icon: <Workflow size={16} />,
  },
];

export const WORKFLOW_ITEMS = [
  {
    title: "OS",
    url: "https://archlinux.org/download/",
    specs: "Arch Linux",
  },
  {
    title: "Desktop Environment",
    url: "https://github.com/hyprwm/Hyprland",
    specs: "Hyprland",
  },
  {
    title: "IDE",
    url: "https://github.com/kovidgoyal/kitty",
    specs: "Neovim",
  },
  {
    title: "Terminal",
    url: "https://github.com/kovidgoyal/kitty",
    specs: "Kitty",
  },
  {
    title: "Mouse",
    url: "https://www.logitechg.com/products/gaming-mice/g305-lightspeed-wireless-gaming-mouse.910-005281.html",
    specs: "Logitech G305 lightspeed",
  },
  {
    title: "Keyboard",
    url: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    specs: "Keychron K2",
  },
  {
    title: "Display",
    url: "https://www.samsung.com/br/monitors/gaming/odyssey-g3-27-inch-144hz-1ms-freesync-lf27g35tfwlxzd/",
    specs: "Samsung G3 27'",
  },
  {
    title: "Takaxo's Machine MK3",
    url: "",
    specs: "my pc",
  },
];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;
export const SUPABASE_TABLE_NAME = "pages";
