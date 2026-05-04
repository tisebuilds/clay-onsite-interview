import { Loader2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/** Hardcoded for the prototype — swap with real meeting data in a real flow. */
const meeting = {
  name: "Design sync",
  startsAtLabel: "Starts at 2:00 PM",
  minutesEarly: 5,
} as const;

function earlyMessage(minutes: number) {
  if (minutes <= 0) {
    return "Starting on time";
  }
  if (minutes === 1) {
    return "You're 1 minute early";
  }
  return `You're ${minutes} minutes early`;
}

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-muted/50 px-4 py-12">
      <Card className="relative w-full max-w-md shadow-lg">
        <span
          className="absolute top-4 left-4 size-2 rounded-full bg-red-500"
          aria-hidden
        />
        <CardContent className="flex flex-col items-center gap-6 px-8 pt-12 pb-10 text-center">
          <div className="space-y-1">
            <p className="font-heading text-lg font-semibold text-foreground">
              Zoom Workplace
            </p>
            <p className="text-xs text-muted-foreground">
              Prototype — connecting state
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Loader2
              className="size-8 animate-spin text-primary"
              aria-hidden
            />
            <p className="text-sm font-medium text-muted-foreground">
              Connecting…
            </p>
          </div>

          <Separator className="w-full" />

          <div className="space-y-2">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              {meeting.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {meeting.startsAtLabel}
            </p>
            <p className="text-sm text-muted-foreground">
              {earlyMessage(meeting.minutesEarly)}
            </p>
          </div>
        </CardContent>
      </Card>

      <p className="mt-8 max-w-md text-center text-xs text-muted-foreground">
        Edit meeting fields at the top of{" "}
        <code className="font-mono">app/page.tsx</code>.
      </p>
    </main>
  );
}
