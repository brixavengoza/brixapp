"use client";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import {
  ClockFading,
  Code2,
  Database,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  MapPin,
} from "lucide-react";
import dynamic from "next/dynamic";
import ThemeToggle from "@/components/features/ThemeToggle";
import Link from "next/link";

const ProfileImage = dynamic(() => import("./ProfileImage"), {
  ssr: false,
});

const ProfileInfo = [
  { title: "Philippines", icon: <MapPin size={15} className="text-primary" /> },
  { title: "PST", icon: <ClockFading size={15} className="text-primary" /> },
  { title: "BSCS", icon: <GraduationCap size={15} className="text-primary" /> },
  {
    title: "EN & PH",
    icon: <Languages size={15} className="text-primary" />,
  },
  {
    title: "Frontend Development",
    icon: <Code2 size={15} className="text-primary" />,
  },
  {
    title: "Database Setup",
    icon: <Database size={15} className="text-primary" />,
  },
];

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN || "";
const github = process.env.NEXT_PUBLIC_GITHUB || "";

export default function Profile() {
  return (
    <Card>
      <div className="flex w-full gap-3">
        <div className="hover-animate max-w max-h-[100px] min-h-[100px] min-w-[100px] overflow-hidden rounded-lg bg-primary hover:scale-105">
          <ProfileImage />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full justify-between">
            <div className="flex w-full max-w-max items-center gap-2 rounded-lg border border-card-inner-border bg-card-inner px-2 py-1">
              <div className="relative h-[12px] w-[12px] rounded-full bg-gray-200 dark:bg-[#2c2c2c]">
                <div className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68d544]" />
              </div>
              <span className="text-[10px]">Available To Work</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
          <h1 className="text-2xl">Brix Avengoza</h1>
          <p className="text-sm text-muted-foreground">
            {`I'm a`}{" "}
            <span className="text-primary">Frontend Engineer</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-2 rounded-lg border border-card-inner-border bg-card-inner p-3">
        {ProfileInfo.map(({ title, icon }, id) => (
          <div
            key={id}
            className="flex max-w-max items-center gap-2 rounded-full border border-card-inner-border bg-card-inner px-2 py-1"
          >
            {icon}
            <span className="text-xs">{title}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row gap-3">
        <Button asChild variant="secondary" size="lg" className="w-full">
          <Link href={linkedin} target="_blank">
            <Linkedin className="text-primary" size={30} />
            LinkedIn
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full">
          <Link href={github} target="_blank">
            <Github className="text-primary" size={30} />
            Github
          </Link>
        </Button>
      </div>
    </Card>
  );
}
