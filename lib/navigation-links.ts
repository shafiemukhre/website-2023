import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blogs",
    href: "/posts",
    description: "Writings on Web Dev, Distributed System and Generative AI.",
  },
  {
    title: "Software Notes",
    href: siteMetadata.softwareNotesUrl as string,
    description: "Collections of notes to build great software. Towards understanding and mastery.",
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
