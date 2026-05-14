import Image from "next/image";

import { ActivityCard } from "@/components/sections/activity-card";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/activities",
  title: "Activités et projets - ONG VAHATRA",
  description:
    "Microfinance, agriculture, élevage, santé, accompagnement social et inclusion financière par ONG VAHATRA.",
});

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Activités"
        title="Des programmes intégrés pour stabiliser les revenus, protéger la santé et renforcer l'autonomie."
        description="Chaque activité relie un besoin économique immédiat à un accompagnement social durable."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-background">
        <div className="container">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <StaggerItem key={activity.slug}>
                <ActivityCard activity={activity} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-vahatra-cream">
        <div className="container grid gap-14">
          {activities.map((activity, index) => (
            <Reveal key={activity.slug}>
              <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Badge variant={index % 2 === 0 ? "warm" : "blue"}>{activity.kicker}</Badge>
                  <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                    {activity.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">{activity.description}</p>
                  <p className="mt-5 rounded-lg border border-vahatra-forest/10 bg-white p-5 font-semibold text-vahatra-forest shadow-sm">
                    {activity.impact}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-editorial">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={1200}
                    height={820}
                    className="aspect-[4/3] object-cover"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
