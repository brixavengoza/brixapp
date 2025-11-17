import { Projects, RecentWorks, WhatIBring } from "@/components/landing";
import Clients from "@/components/landing/TechStacks";
import Contact from "@/components/landing/Contact";
import ContainerCounter from "@/components/landing/ContainerCounter";
import FollowMe from "@/components/landing/FollowMe";
import Profile from "@/components/landing/profile";
import Services from "@/components/landing/Services";
import WorkProcess from "@/components/landing/WorkProcess";
import { Calendar, Flag, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen p-7 text-foreground">
      <div className="m-auto grid h-full w-full max-w-[1750px] grid-cols-10 grid-rows-6 gap-3 2xl:max-h-[1000px] 2xl:gap-5">
        <div className="col-span-2 row-span-2">
          <RecentWorks />
        </div>
        <div className="col-span-2 col-start-1 row-span-2 row-start-3">
          <Projects />
        </div>
        <div className="card-2 col-span-2 col-start-1 row-span-2 row-start-5">
          <Services />
        </div>
        <div className="card-2 col-start-3 row-start-1">
          <ContainerCounter
            title="Projects"
            value={30}
            icon={<Flag size={16} className="text-primary" />}
          />
        </div>
        <div className="card-2 col-start-4 row-start-1">
          <ContainerCounter
            title="Clients"
            value={8}
            icon={<Smile size={16} className="text-primary" />}
          />
        </div>
        <div className="card-2 col-start-5 row-start-1">
          <ContainerCounter
            title="Years"
            value={4}
            icon={<Calendar size={16} className="text-primary" />}
          />
        </div>
        <div className="card-2 col-span-3 col-start-3 row-span-3 row-start-2">
          <Profile />
        </div>
        <div className="card-2 col-span-3 col-start-3 row-span-2 row-start-5">
          <Clients />
        </div>
        <div className="card-2 col-span-3 col-start-6 row-span-3 row-start-1">
          <WhatIBring />
        </div>
        <div className="card-2 col-span-2 col-start-6 row-span-3 row-start-4">
          <FollowMe />
        </div>
        <div className="card-2 col-span-3 col-start-8 row-span-3 row-start-4">
          <Contact />
        </div>
        <div className="card-2 col-span-2 col-start-9 row-span-3 row-start-1">
          <WorkProcess />
        </div>
      </div>
    </div>
  );
}
