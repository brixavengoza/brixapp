import { Laptop } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import CarouselSlider from "../features/CarouselSlider";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TechStacks1 = [
  {
    name: "poktfund",
    icon: (
      <Image
        src="/projects/poktfund/poktfund_thumbnail.png"
        alt="poktfund"
        width={200}
        height={200}
      />
    ),
  },
  {
    name: "fitness",
    icon: (
      <Image
        src="/projects/fitness/fitr-1.webp"
        alt="poktfund"
        width={200}
        height={200}
      />
    ),
  },
  {
    name: "ecommerce",
    icon: (
      <Image
        src="/projects/ecommerce/ecom3.png"
        alt="poktfund"
        width={200}
        height={200}
      />
    ),
  },
  {
    name: "fx",
    icon: (
      <Image
        src="/projects/fx/fx-2.png"
        alt="poktfund"
        width={200}
        height={200}
        className="object-bottom pt-[130px]"
      />
    ),
  },
];

export default function Projects() {
  return (
    <Card className="p-0">
      <div className="flex flex-col items-center p-5">
        <div className="flex items-center gap-2">
          <Laptop size={16} className="text-primary" />
          <h5 className="text-sm font-medium text-muted-foreground">
            Projects
          </h5>
        </div>
        <p className="text-sm text-gray-900 dark:text-gray-300">Tech Arsenal</p>
      </div>
      <div className="relative h-full w-full space-y-2 py-5 pb-10">
        <CarouselSlider
          items={TechStacks1}
          slidesToShow={2}
          speed={3000}
          itemClassName="h-[90px] w-[120px] p-0 bg-card-inner border border-card-inner-border"
          disableAutoplay
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              className="absolute bottom-5 left-1/2 -translate-x-1/2"
            >
              View Works
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-secondary">
            <p>Coming Soon!</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </Card>
  );
}
