import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  HandHeart,
  HeartPulse,
  Landmark,
  Sprout,
  Tractor,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Activity } from "@/data/site";

const icons = {
  microfinance: Landmark,
  agriculture: Sprout,
  elevage: Tractor,
  sante: HeartPulse,
  social: HandHeart,
  "inclusion-financiere": Banknote,
};

type ActivityCardProps = {
  activity: Activity;
  compact?: boolean;
};

export function ActivityCard({ activity, compact = false }: ActivityCardProps) {
  const Icon = icons[activity.slug as keyof typeof icons] ?? HandHeart;

  return (
    <Card className="group overflow-hidden border-vahatra-forest/10 bg-white/90 shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vahatra-ink/58 to-transparent" />
        <div className="absolute left-4 top-4 grid size-10 place-items-center rounded-md bg-white text-vahatra-forest shadow-soft">
          <Icon className="size-5" />
        </div>
      </div>
      <CardContent className="p-5">
        <Badge variant="warm">{activity.kicker}</Badge>
        <h3 className="mt-4 text-2xl font-semibold tracking-normal text-vahatra-ink">{activity.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {compact ? activity.summary : activity.description}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
          {activity.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-vahatra-forest">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <Button asChild variant="link" className="mt-4">
          <Link href="/activities">Découvrir l’activité</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
