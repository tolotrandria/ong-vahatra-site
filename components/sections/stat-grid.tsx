import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import type { Stat } from "@/data/site";

type StatGridProps = {
  stats: Stat[];
};

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-vahatra-forest/10 bg-white/82 shadow-soft">
          <CardContent className="p-5">
            <p className="text-3xl font-semibold text-vahatra-forest md:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <h3 className="mt-3 text-base font-semibold">{stat.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
