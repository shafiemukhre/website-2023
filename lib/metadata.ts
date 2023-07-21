import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Shafie Mukhre",
  handle: "@shafiemukhre",
  socialProfiles,
  email: "shafiemukhre@gmail.com",
  website: "https://shafiemukhre.com",
  jobTitle: "Fullstack Software Engineer (Frontend focus)",
  company: "",
  availableForWork: true,
  location: {
    city: "San Francisco",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}, a fullstack software engineer who love building useful products.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/shafiemukhre/website-2023",
  newsletterUrl: "https://shafie.substack.com",
  analyticsProvider: "umami",
};

export default siteMetadata;
