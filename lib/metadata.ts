import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Shafie Mukhre",
  handle: "@shafiemukhre",
  socialProfiles,
  email: "shafiemukhre@gmail.com",
  website: "https://shafiemukhre.com",
  jobTitle: "Software Engineer",
  company: "",
  availableForWork: false,
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
  newsletterProvider: "substack",
  newsletterUrl: "https://shafie.substack.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on ProductHunt →",
    link: "https://www.producthunt.com/@shafiemukhre",
  },
  postsPerPage: 10,
  postsOnHomePage: 3,
  projectsOnHomePage: 4,
};

export default siteMetadata;
