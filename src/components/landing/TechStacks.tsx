"use client";
import { Card } from "../ui/card";
import { Rocket } from "lucide-react";
import CarouselSlider from "../features/CarouselSlider";
import Image from "next/image";

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={20} height={20} className="rounded-[5px]" />
);

const TechStacks1 = [
  {
    name: "React",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="Typescript"
      />
    ),
  },
  {
    name: "Next JS",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="NextJS"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind"
      />
    ),
  },
  {
    name: "React Native",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React Native"
      />
    ),
  },
  {
    name: "Supabase",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        alt="Supabase"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="Postgresql"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="Mongodb"
      />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        alt="Prisma"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="NodeJS"
      />
    ),
  },
];

const TechStacks2 = [
  {
    name: "Git",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="Github"
      />
    ),
  },
  {
    name: "Jest",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="Jest"
      />
    ),
  },
  {
    name: "Storybook",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg"
        alt="Storybook"
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
      />
    ),
  },
  {
    name: "VS Code",
    icon: (
      <Icon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
      />
    ),
  },
  {
    name: "Stripe",
    icon: (
      <Icon
        src="https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE"
        alt="Stripe"
      />
    ),
  },
  {
    name: "Zustand",
    icon: (
      <Icon
        src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
        alt="Zustand"
      />
    ),
  },
  {
    name: "Zod",
    icon: (
      <Icon
        src="https://avatars.githubusercontent.com/u/90275858?s=200&v=4"
        alt="Zod"
      />
    ),
  },
  {
    name: "Expo",
    icon: (
      <Icon
        src="https://avatars.githubusercontent.com/u/12504344?s=200&v=4"
        alt="Expo"
      />
    ),
  },
];

export default function TechStacks() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-col items-center p-6 pb-0">
        <div className="mb-1 flex items-center gap-2">
          <Rocket size={16} className="text-primary" />
          <h5 className="text-sm font-medium text-muted-foreground">
            Tech Stack
          </h5>
        </div>
        <p className="text-sm text-gray-900 dark:text-gray-300">
          Skills & Technologies
        </p>
      </div>

      <div className="w-full space-y-2 py-5">
        <CarouselSlider items={TechStacks1} marquee speed={10000} />
        <CarouselSlider
          items={TechStacks2}
          marquee
          speed={10000}
          delay={1000}
        />
      </div>
    </Card>
  );
}
