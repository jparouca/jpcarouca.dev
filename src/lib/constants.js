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

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <SparklesIcon size={16} />,
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
    label: "Workflow",
    icon: <Workflow size={16} />,
  },
];

export const WORKSPACE_ITEMS = [
  {
    title: "Richard Lampert Eiermann 2 Desk",
    url: "https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/",
    specs: "White, 80x160cm",
  },
  {
    title: "Herman Miller Aeron Remastered",
    url: "https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html",
    specs: "Graphite, Size C",
  },
  {
    title: "Apple Studio Display",
    url: "https://www.apple.com/nl/studio-display/",
    specs: "Tilt- and height-adjustable stand",
  },
  {
    title: '14" MacBook Pro',
    url: "https://www.apple.com/nl/macbook-pro/",
    specs: "Space Gray, M2, 16GB RAM, 256GB SSD",
  },
  {
    title: "Apple Magic Trackpad",
    url: "https://www.apple.com/nl/shop/product/MK2D3Z/A/magic-trackpad-wit-multi%E2%80%91touch-oppervlak",
    specs: "White",
  },
  {
    title: "Apple Magic Keyboard",
    url: "https://www.apple.com/nl/shop/product/MK293N/A/magic-keyboard-met-touch-id-voor-mac-modellen-met-apple-silicon-nederlands",
    specs: "White, Touch ID",
  },
  {
    title: "Logitech MX Master 3S",
    url: "https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html",
    specs: "Pale Gray",
  },
  {
    title: "Dyson Solarcycle Morph",
    url: "https://www.dyson.nl/verlichting/bureaulamp/solarcycle-morph-cd06/wit-zilver",
    specs: "White/Silver",
  },
  {
    title: "Apple Airpods Max",
    url: "https://www.apple.com/nl/airpods-max/",
    specs: "Space Gray",
  },
  {
    title: "Apple Airpods Pro",
    url: "https://www.apple.com/nl/airpods-pro/",
    specs: "2nd generation",
  },
  {
    title: "Braun Analogue Wall Clock",
    url: "https://braun-clocks.com/collections/wall-clocks/products/bc17-classic-large-analogue-wall-clock-white",
    specs: "White, BC17 Classic Large",
  },
  {
    title: "IKEA Alex Drawer Unit",
    url: "https://www.ikea.com/nl/en/p/alex-drawer-unit-white-00473546/",
    specs: "White, 36x70cm",
  },
  {
    title: "IKEA Övning Footrest",
    url: "https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/",
    specs: "Gray/Blue",
  },
];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;
export const SUPABASE_TABLE_NAME = "pages";
