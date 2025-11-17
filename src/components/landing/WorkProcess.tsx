"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  MessageSquare,
  Sparkles,
  FileSearch,
  Layout,
  Code2,
  Database,
  TestTube,
  Rocket,
} from "lucide-react";

const Process = [
  { title: "Discovery & Planning", icon: <MessageSquare size={18} /> },
  { title: "Requirements Analysis", icon: <FileSearch size={18} /> },
  { title: "Wireframe Design", icon: <Layout size={18} /> },
  { title: "Frontend Development", icon: <Code2 size={18} /> },
  { title: "Backend & Database Setup", icon: <Database size={18} /> },
  { title: "Testing & QA", icon: <TestTube size={18} /> },
  { title: "Deployment & Launch", icon: <Rocket size={18} /> },
];

export default function WorkProcess() {
  return (
    <Card className="justify-normal p-0">
      <CardHeader className="w-full border-b py-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <h5 className="text-sm font-medium text-muted-foreground">
              Work Process
            </h5>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-300">
            Development Flow
          </p>
        </div>
      </CardHeader>
      <CardContent
        className="group flex w-full select-none flex-col gap-2 overflow-y-auto p-5 active:cursor-grabbing"
        onMouseDown={(e) => {
          const el = e.currentTarget;
          el.dataset.dragging = "true";
          el.dataset.startY = e.pageY.toString();
          el.dataset.scrollTop = el.scrollTop.toString();
        }}
        onMouseMove={(e) => {
          const el = e.currentTarget;
          if (el.dataset.dragging === "true") {
            const startY = Number(el.dataset.startY);
            const scrollTop = Number(el.dataset.scrollTop);
            el.scrollTop = scrollTop - (e.pageY - startY);
          }
        }}
        onMouseUp={(e) => {
          e.currentTarget.dataset.dragging = "false";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.dataset.dragging = "false";
        }}
      >
        {Process.map(({ title, icon }, id) => (
          <div
            key={id}
            className="hover-animate col-span-1 flex items-center gap-2 rounded-md bg-secondary p-2 hover:scale-105"
          >
            <div className="bg-primary/20 flex h-[30px] w-[30px] items-center justify-center rounded-[6px] p-1 text-primary">
              {icon}
            </div>
            <p className="text-xs">{title}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
