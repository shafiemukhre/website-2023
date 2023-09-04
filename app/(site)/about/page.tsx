import Image from "next/image";
import { allPages, allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";

import { defaultAuthor } from "@/lib/metadata";
import { Mdx } from "@/components/mdx";

async function getAboutPage() {
  const aboutPage = allPages.find((page) => page.slug === "aboutme");

  if (!aboutPage) {
    null;
  }

  return aboutPage;
}

export default async function About() {
  const aboutPage = await getAboutPage();

  return (
    <div className="pb-10">
      {aboutPage && aboutPage.lastUpdatedDate && (
        <div className="container max-w-6xl">
          <div className="mb-8">
            <h2 className="font-heading text-4xl font-bold">Who&apos;s this guy again?</h2>
            <time className="text-sm text-slate-500">
              Last updated: {format(parseISO(aboutPage.lastUpdatedDate), "LLLL d, yyyy")}{" "}
            </time>
          </div>
          <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
            <div className="col-span-1 mx-auto flex flex-col items-center justify-center">
              <Image
                src="/avatar-home.png"
                alt={defaultAuthor.name}
                width={400}
                height={498}
                className="h-auto w-72 -rotate-1 hover:rotate-3"
              />
              <div className="text-center">
                <h1 className="font-heading text-2xl font-bold">{defaultAuthor.name}</h1>
                <p className="text-muted-foreground">{defaultAuthor.jobTitle}</p>
                <p className="text-muted-foreground">{defaultAuthor.company}</p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
                <Mdx code={aboutPage.body.code} />
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
