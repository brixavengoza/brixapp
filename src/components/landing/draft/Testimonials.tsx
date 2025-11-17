import { Card, CardHeader, CardContent } from "../../ui/card";
import { SmilePlus } from "lucide-react";

export default function Testimonials() {
  return (
    <Card className="justify-normal p-0">
      <CardHeader className="w-full border-b py-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <SmilePlus size={16} className="text-primary" />
            <h5 className="text-sm font-medium text-muted-foreground">
              Testimonials
            </h5>
          </div>
          <p className="text-sm text-gray-300">Review Showcase</p>
        </div>
      </CardHeader>
      <CardContent>test</CardContent>
    </Card>
  );
}
