"use client";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface ContainerCounterProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

export default function ContainerCounter({
  title,
  value,
  icon,
}: ContainerCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === value) return;

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <Card className="p-2">
      <div className="flex items-center gap-1">
        <h1 className="hover-animate cursor-pointer font-roboto text-[60px]/[1] font-bold tracking-[-0.08em] text-gray-700 hover:scale-105 dark:text-gray-300">
          {count}
        </h1>
        <Plus className="text-primary" />
      </div>
      <div className="flex w-full items-center gap-2 rounded-full border border-card-inner-border bg-card-inner px-3 py-1">
        {icon}
        <span className="text-gray-bold text-[12px] font-medium">{title}</span>
      </div>
    </Card>
  );
}
