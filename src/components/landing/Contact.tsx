import { Card } from "../ui/card";
import { Crown, MailCheck, PictureInPicture2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import HireMe from "./contact/HireMe";

const email = process.env.NEXT_PUBLIC_EMAIL || "";
const calendly = process.env.NEXT_PUBLIC_CALENDLY || "";

export default function Contact() {
  return (
    <Card>
      <Crown
        size={50}
        className="rounded-full bg-gray-200 p-3 text-primary dark:bg-gray-400"
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl">{`Let's Work Together`}</h1>
        <p className="text-muted-foreground">{`Let's Make Magic Happen Together!`}</p>
      </div>
      <div className="flex w-full flex-col items-center gap-2 text-center">
        <Button asChild size="lg" variant="secondary" className="w-full">
          <Link href={`mailto:${email}`}>
            <MailCheck className="text-primary" size={40} />
            Email Me
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="w-full">
          <Link href={calendly} target="_blank">
            <PictureInPicture2 className="text-primary" size={40} />
            Schedule A Call
          </Link>
        </Button>
        <HireMe />
      </div>
    </Card>
  );
}
