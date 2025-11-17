import { Card } from "../ui/card";
import {
  Briefcase,
  LayoutDashboard,
  MonitorCloud,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const focuses = [
  { icon: <ShoppingCart size={17} />, label: "E-com" },
  { icon: <MonitorCloud size={17} />, label: "SaaS" },
  { icon: <Smartphone size={17} />, label: "Mobile App" },
  { icon: <LayoutDashboard size={17} />, label: "Dashboard" },
];

export default function RecentWorks() {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-primary" />
          <h5 className="text-sm font-medium text-muted-foreground">
            Work Focus
          </h5>
        </div>
        <p className="text-sm text-gray-900 dark:text-gray-300">Recent Works</p>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        {focuses.map(({ label, icon }, id) => (
          <div
            key={id}
            className="col-span-1 flex items-center gap-1 rounded-md bg-secondary p-[5px]"
          >
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-gray-50 dark:bg-gray-500">
              {icon}
            </div>
            <p className="text-xs">{label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
