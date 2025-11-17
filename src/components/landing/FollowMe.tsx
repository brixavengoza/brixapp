import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AtSign, Instagram, Linkedin, Spotlight, SquareX } from "lucide-react";

const Socials = [
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    url: process.env.NEXT_PUBLIC_LINKEDIN || "",
  },
  {
    title: "Threads",
    icon: <AtSign />,
    url: process.env.NEXT_PUBLIC_THREADS || "",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    url: process.env.NEXT_PUBLIC_INSTAGRAM || "",
  },

  {
    title: "X",
    icon: <SquareX />,
    url: process.env.NEXT_PUBLIC_X || "",
  },
];

export default function FollowMe() {
  return (
    <Card className="justify-normal p-0">
      <CardHeader className="w-full">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Spotlight size={16} className="text-primary" />
            <h5 className="text-sm font-medium text-muted-foreground">
              Follow Me
            </h5>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-300">
            Online Presence
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex w-full flex-col gap-2 p-5">
        {Socials.map(({ title, url, icon }, id) => (
          <Link key={id} href={url} target="_blank">
            <div className="hover-animate col-span-1 flex items-center gap-2 rounded-md bg-secondary p-2 hover:scale-105">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-gray-300 p-1 text-foreground dark:bg-gray-500">
                {icon}
              </div>
              <p className="text-xs">{title}</p>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
