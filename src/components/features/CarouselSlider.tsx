"use client";
import React, { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

interface CarouselItem {
  name: string;
  icon: React.ReactNode;
}

interface CarouselSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
  slidesToShow?: number;
  speed?: number;
  itemClassName?: string;
  disableAutoplay?: boolean;
  marquee?: boolean;
  delay?: number;
}

export default function CarouselSlider({
  items,
  slidesToShow = 3,
  speed = 3000,
  itemClassName,
  disableAutoplay = false,
  marquee = false,
  delay = 0,
}: CarouselSliderProps) {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: speed,
      stopOnInteraction: true,
      active: !disableAutoplay && !marquee,
      playOnInit: delay === 0,
    })
  );

  const scrollSpeed = marquee ? Math.max(0.5, 5000 / speed) : 0;

  const autoScrollPlugin = useRef(
    AutoScroll({
      speed: scrollSpeed,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      active: marquee,
      playOnInit: delay === 0,
    })
  );

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        if (marquee) {
          autoScrollPlugin.current.play();
        } else if (!disableAutoplay) {
          autoplayPlugin.current.play();
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, marquee, disableAutoplay]);

  const plugins = marquee
    ? [autoScrollPlugin.current]
    : [autoplayPlugin.current];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-card to-transparent" />

      <Carousel
        opts={{
          align: "start",
          loop: true,
          containScroll: "trimSnaps",
          dragFree: marquee,
        }}
        plugins={plugins}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {items.map(({ name, icon }, index) => {
            return (
              <CarouselItem
                key={index}
                className={cn("pl-3", !slidesToShow && "basis-auto")}
                style={
                  slidesToShow
                    ? {
                        flexBasis: `calc(${100 / slidesToShow}% - 0.75rem)`,
                      }
                    : undefined
                }
              >
                <div
                  className={cn(
                    "hover-animate group flex h-[40px] cursor-pointer flex-row items-center gap-2 overflow-hidden rounded-lg bg-secondary px-3 transition-all hover:scale-105 hover:border-zinc-600 dark:hover:bg-zinc-800",
                    slidesToShow ? "w-full" : "w-fit whitespace-nowrap",
                    itemClassName
                  )}
                >
                  {icon}
                  <p className="truncate text-xs font-medium">{name}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
