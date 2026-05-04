import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ItemStatus = "Ready" | "In progress" | "Idea";

const items: { name: string; description: string; status: ItemStatus }[] = [
  {
    name: "First section",
    description: "Replace this with your primary feature or workflow.",
    status: "Ready",
  },
  {
    name: "Second section",
    description: "A placeholder for an in-progress feature you're iterating on.",
    status: "In progress",
  },
  {
    name: "Third section",
    description: "Use this slot for ideas you haven't started yet.",
    status: "Idea",
  },
];

const statusVariant: Record<ItemStatus, "default" | "secondary" | "outline"> = {
  Ready: "default",
  "In progress": "secondary",
  Idea: "outline",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Prototype Scaffold
        </h1>
        <p className="text-muted-foreground">
          A minimal Next.js + shadcn/ui starting point. Edit{" "}
          <code className="font-mono text-sm">app/page.tsx</code> to begin.
        </p>
      </header>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Get started</CardTitle>
          <CardDescription>
            Swap the copy below, drop in your own components, and ship.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            This page is intentionally simple. Everything you see lives in a
            single file so you can move fast without hunting for state.
          </p>
          <div>
            <Button>
              Primary action
              <ArrowRight />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
          <CardDescription>
            Hardcoded placeholder data. Replace with anything.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          {items.map((item, index) => (
            <div key={item.name}>
              {index > 0 ? <Separator className="my-3" /> : null}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <Badge variant={statusVariant[item.status]}>
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
