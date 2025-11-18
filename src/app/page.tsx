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
    <div className="flex items-center justify-center">
      <div className="flex min-h-screen p-3 text-foreground md:p-5 lg:h-screen lg:p-7">
        <div className="m-auto grid h-full w-full max-w-[1750px] grid-cols-1 grid-rows-[auto] gap-3 md:max-h-[1500px] md:grid-cols-5 md:grid-rows-12 md:gap-4 lg:max-h-[700px] lg:grid-cols-10 lg:grid-rows-6 2xl:max-h-[1000px] 2xl:gap-5">
          <div className="card-2 order-1 md:order-none md:col-span-3 md:col-start-3 md:row-span-3 md:row-start-2 lg:col-span-3 lg:col-start-3 lg:row-span-3 lg:row-start-2">
            <Profile />
          </div>

          <div className="order-2 md:order-none md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
            <RecentWorks />
          </div>

          <div className="order-3 grid grid-cols-3 gap-3 md:hidden">
            <div className="card-2">
              <ContainerCounter
                title="Projects"
                value={30}
                icon={<Flag size={16} className="text-primary" />}
              />
            </div>
            <div className="card-2">
              <ContainerCounter
                title="Clients"
                value={8}
                icon={<Smile size={16} className="text-primary" />}
              />
            </div>
            <div className="card-2">
              <ContainerCounter
                title="Years"
                value={4}
                icon={<Calendar size={16} className="text-primary" />}
              />
            </div>
          </div>

          <div className="card-2 hidden md:col-start-3 md:row-start-1 md:block lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-1">
            <ContainerCounter
              title="Projects"
              value={30}
              icon={<Flag size={16} className="text-primary" />}
            />
          </div>

          <div className="card-2 hidden md:col-start-4 md:row-start-1 md:block lg:col-span-1 lg:col-start-4 lg:row-span-1 lg:row-start-1">
            <ContainerCounter
              title="Clients"
              value={8}
              icon={<Smile size={16} className="text-primary" />}
            />
          </div>

          <div className="card-2 hidden md:col-start-5 md:row-start-1 md:block lg:col-span-1 lg:col-start-5 lg:row-span-1 lg:row-start-1">
            <ContainerCounter
              title="Years"
              value={4}
              icon={<Calendar size={16} className="text-primary" />}
            />
          </div>

          <div className="order-6 md:order-none md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-3 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-3">
            <Projects />
          </div>

          <div className="card-2 order-7 md:order-none md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-5 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-5">
            <Services />
          </div>

          <div className="card-2 order-8 md:order-none md:col-span-3 md:col-start-3 md:row-span-2 md:row-start-5 lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:row-start-5">
            <Clients />
          </div>

          <div className="card-2 order-4 md:order-none md:col-span-3 md:row-span-3 md:row-start-7 lg:col-span-3 lg:col-start-6 lg:row-span-3 lg:row-start-1">
            <WhatIBring />
          </div>

          <div className="card-2 order-9 md:order-none md:col-span-2 md:col-start-1 md:row-span-3 md:row-start-10 lg:col-span-2 lg:col-start-6 lg:row-span-3 lg:row-start-4">
            <FollowMe />
          </div>

          <div className="card-2 order-5 md:order-none md:col-span-3 md:col-start-3 md:row-span-3 md:row-start-10 lg:col-span-2 lg:col-start-9 lg:row-span-3 lg:row-start-1">
            <WorkProcess />
          </div>

          <div className="card-2 order-10 md:order-none md:col-span-2 md:col-start-4 md:row-span-3 md:row-start-7 lg:col-span-3 lg:col-start-8 lg:row-span-3 lg:row-start-4">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
