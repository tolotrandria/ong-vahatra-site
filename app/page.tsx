import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ActivityCard } from "@/components/sections/activity-card";
import { CtaBand } from "@/components/sections/cta-band";
import { HomeHero } from "@/components/sections/home-hero";
import { StatGrid } from "@/components/sections/stat-grid";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { activities, partners, siteStats, values } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/",
  title: "ONG VAHATRA - Microfinance sociale et développement rural à Madagascar",
});

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section className="section-padding bg-vahatra-cream">
        <div className="container">
          <Reveal className="max-w-3xl">
            <Badge variant="warm">Impact mesurable</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Une présence locale, des standards de pilotage pensés pour les partenaires internationaux.
            </h2>
          </Reveal>
          <div className="mt-10">
            <StatGrid stats={siteStats} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg shadow-editorial">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1500"
                alt="Réunion communautaire accompagnée par une ONG"
                width={1200}
                height={900}
                className="aspect-[4/5] object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white/92 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-vahatra-earth">
                  Approche intégrée
                </p>
                <p className="mt-2 text-xl font-semibold text-vahatra-ink">
                  Crédit, santé, production et accompagnement social dans un même parcours.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Badge variant="blue">Institution malgache</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              VAHATRA agit là où la finance seule ne suffit pas.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Depuis Tomboarivo, Antsirabe, l’organisation accompagne les familles vulnérables
              avec une microfinance responsable, des visites de terrain, des formations concrètes
              et une lecture sociale des risques.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-lg border border-border bg-white p-5">
                  <CheckCircle2 className="size-5 text-vahatra-leaf" />
                  <h3 className="mt-3 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" size="lg">
              <Link href="/about">
                Découvrir l’histoire
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-vahatra-ink text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/52">
                Programmes
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                Des activités conçues autour de la stabilité familiale.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-8 text-white/68">
                Chaque programme associe un service financier à une présence humaine:
                conseiller, animation de groupe, formation et suivi des vulnérabilités.
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {activities.slice(0, 3).map((activity) => (
              <StaggerItem key={activity.slug}>
                <ActivityCard activity={activity} compact />
              </StaggerItem>
            ))}
          </Stagger>
          <Button asChild variant="light" className="mt-8">
            <Link href="/activities">
              Voir toutes les activités
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <Badge variant="warm">Voix terrain</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                La confiance se construit dans les visites, les groupes et les saisons agricoles.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <TestimonialCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vahatra-cream">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="blue">Écosystème</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Une organisation locale pensée pour dialoguer avec des partenaires exigeants.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner} className="rounded-lg border border-vahatra-forest/10 bg-white px-5 py-4 text-sm font-semibold text-vahatra-ink shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
