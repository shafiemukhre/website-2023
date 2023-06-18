"use client";

import * as React from "react";

import { defaultAuthor } from "@/lib/metadata";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroProps {
  title: string;
  subtitle: string;
}

export function HeroVideo({ title, subtitle }: HeroProps) {
  return (
    <div className="container flex max-w-6xl flex-col items-center md:flex-row">
      <div className="mb-4 flex max-w-xl self-start sm:hidden">
        <Avatar>
          <AvatarImage className="rounded-full border border-primary" src="/avatar.png" alt={defaultAuthor.name} />
          <AvatarFallback>{defaultAuthor.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="hidden lg:block lg:w-4/12">
        <AspectRatio ratio={9 / 12}>
          <div className="rounded-lg bg-black shadow-lg">
            <iframe
              src="https://www.videoask.com/[videoaskID]"
              allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
              className="h-[300px] w-full rounded-lg bg-black shadow-lg md:h-[500px]"
            ></iframe>
          </div>
        </AspectRatio>
      </div>
      <div className="ml-auto flex max-w-xl flex-col">
        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        <h2 className="mt-6 font-heading text-lg text-muted-foreground">{subtitle}</h2>
      </div>
    </div>
  );
}
