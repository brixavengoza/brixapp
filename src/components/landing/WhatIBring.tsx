"use client";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const values = [
  {
    emoji: "⚡",
    label: "Fast Delivery",
    description: "Ship features quickly without compromising quality",
    align: "start",
  },
  {
    emoji: "✨",
    label: "Clean Code",
    description: "Maintainable, scalable, and well-documented code",
    align: "end",
  },
  {
    emoji: "🎯",
    label: "Pixel Perfect",
    description: "Designs implemented with precision and attention to detail",
    align: "start",
  },
  {
    emoji: "💪",
    label: "Reliable",
    description: "Clear communication and consistent delivery",
    align: "end",
  },
  {
    emoji: "🚀",
    label: "Performance Focus",
    description: "100% Lighthouse scores with optimized load times",
    align: "start",
  },
  {
    emoji: "🔒",
    label: "Type Safety",
    description: "TypeScript expertise for bug-free, scalable applications",
    align: "end",
  },
  {
    emoji: "📱",
    label: "Cross-Platform",
    description: "Build once, deploy everywhere with React & React Native",
    align: "start",
  },
  {
    emoji: "🧪",
    label: "Tested Code",
    description: "80%+ test coverage with Jest and Cypress",
    align: "end",
  },
];

export default function WhatIBring() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <Card className="gap-0 p-0">
      <CardHeader className="w-full border-b py-4">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <h5 className="text-sm font-medium text-muted-foreground">
              What I Bring
            </h5>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-300">
            Value Proposition
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            axis: "y",
            dragFree: true,
          }}
          orientation="vertical"
          plugins={[plugin.current]}
          className="w-full p-0"
        >
          <CarouselContent className="mt-0 h-[280px] px-5">
            {values.map((item, id) => (
              <CarouselItem
                key={id}
                className="basis-[54%] cursor-pointer select-none px-2 pt-2"
              >
                <div
                  className={`cursor-custom flex w-full ${
                    item.align === "end" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="bg-secondary/50 flex w-[70%] flex-col items-center gap-2 rounded-lg bg-secondary p-4 text-center transition-all hover:scale-105">
                    <span className="text-3xl">{item.emoji}</span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="px-[15px] text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
