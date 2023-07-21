import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPages, allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { ArrowRight } from "lucide-react";

import { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { HeroImage } from "@/components/hero-image";
import { HeroMinimal } from "@/components/hero-minimal";
import { HeroSimple } from "@/components/hero-simple";
import { HeroVideo } from "@/components/hero-video";
import { Sidebar } from "@/components/home-sidebar";
import { Mdx } from "@/components/mdx-components";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import PostPreview from "@/components/post-preview";

async function getAboutPage() {
  const aboutPage = allPages.find((page) => page.slug === "about");

  if (!aboutPage) {
    null;
  }

  return aboutPage;
}

export default async function Home() {
  const aboutPage = await getAboutPage();
  const posts = allPosts
    .filter((post) => post.status === "published")
    .sort((a, b) =>
      compareDesc(new Date(a.lastUpdatedDate || a.publishedDate), new Date(b.lastUpdatedDate || b.publishedDate))
    )
    .slice(0, 8);

  return (
    <div className="pb-10">
      <HeroMinimal title="" subtitle="I'm Shafie. Fullstack engineer writing code and blog on the internet." />
      <div className="container mt-12 max-w-6xl">
        <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-flow-row gap-2">
              {posts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
            </div>
            <Link
              href="/posts"
              className="mt-10 flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
            >
              See all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <aside className="w-full">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
