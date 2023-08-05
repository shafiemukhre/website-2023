import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Engineering Notes",
    href: "/posts",
    description: "Writings on Web Dev, Distributed System and Generative AI.",
  },
  {
    title: "Personal Notes",
    href: siteMetadata.newsletterUrl,
    description: "My casual writings on non-technical topics, coming soon.",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];
