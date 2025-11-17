"use client";
import { Card } from "../ui/card";
import {
  Code2,
  Smartphone,
  Zap,
  ShoppingCart,
  BarChart3,
  Laptop,
  Globe,
  Layout,
} from "lucide-react";
import { Button } from "../ui/button";
import CarouselSlider from "../features/CarouselSlider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ServicesRow1 = [
  {
    name: "Web App Development",
    icon: (
      <Code2 className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "SaaS Applications",
    icon: (
      <Layout className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "E-commerce Solutions",
    icon: (
      <ShoppingCart className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Landing Pages",
    icon: (
      <Globe className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Mobile Apps (React Native)",
    icon: (
      <Smartphone className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
];

const ServicesRow2 = [
  {
    name: "Admin Dashboards",
    icon: (
      <BarChart3 className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Performance Optimization",
    icon: (
      <Zap className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Supabase Integration",
    icon: (
      <Code2 className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Payment Integration",
    icon: (
      <ShoppingCart className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
  {
    name: "Component Libraries",
    icon: (
      <Layout className="min-h-[25px] min-w-[25px] rounded-[6px] bg-gray-50 p-[5px] text-foreground dark:bg-gray-500" />
    ),
  },
];

export default function Services() {
  return (
    <Card className="p-0">
      <div className="flex flex-col items-center p-5 pb-0">
        <div className="flex items-center gap-2">
          <Laptop size={16} className="text-primary" />
          <h5 className="text-sm font-medium text-muted-foreground">
            Services
          </h5>
        </div>
        <p className="text-sm text-gray-900 dark:text-gray-300">
          Solutions Suite
        </p>
      </div>
      <div className="relative w-full space-y-2 py-5 pb-10">
        <CarouselSlider
          items={ServicesRow1}
          slidesToShow={1.7}
          marquee
          speed={10000}
          delay={3000}
        />
        <CarouselSlider
          items={ServicesRow2}
          slidesToShow={1.2}
          speed={10000}
          marquee
          delay={4000}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 transition-all hover:scale-105"
            >
              View All Services
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
