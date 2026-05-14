import { CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { partners, team, timeline, values } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/about",
  title: "À propos - ONG VAHATRA",
  description:
    "Découvrez l'histoire, la mission, la vision, les valeurs et l'équipe de l'ONG VAHATRA à Antsirabe.",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="Une ONG malgache née de la proximité avec les familles rurales."
        description="VAHATRA conjugue expertise financière, présence sociale et compréhension fine des réalités agricoles des hautes terres."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-background">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Badge variant="warm">Mission</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Permettre aux ménages vulnérables de reprendre prise sur leur économie.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-vahatra-forest/10 bg-white shadow-soft">
              <CardContent className="p-7">
                <h3 className="text-2xl font-semibold">Notre mission</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Offrir des services de microfinance sociale et d’accompagnement humain
                  pour renforcer la stabilité, les revenus et la dignité des familles rurales.
                </p>
              </CardContent>
            </Card>
            <Card className="border-vahatra-forest/10 bg-white shadow-soft">
              <CardContent className="p-7">
                <h3 className="text-2xl font-semibold">Notre vision</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Des communautés rurales capables d’investir, de se protéger, de produire
                  et de transmettre une trajectoire plus sûre aux générations suivantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vahatra-cream">
        <div className="container">
          <Reveal className="max-w-3xl">
            <Badge variant="blue">Valeurs</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Un cadre d’action clair pour une finance qui protège autant qu’elle développe.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full border-vahatra-forest/10 bg-white shadow-soft">
                  <CardContent className="p-6">
                    <CheckCircle2 className="size-5 text-vahatra-leaf" />
                    <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Badge variant="warm">Histoire</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Une trajectoire construite par étapes, au rythme des besoins terrain.
            </h2>
          </Reveal>
          <div className="grid gap-5">
            {timeline.map((item) => (
              <Reveal key={item.year}>
                <div className="grid gap-4 rounded-lg border border-border bg-white p-6 shadow-sm md:grid-cols-[120px_1fr]">
                  <p className="text-3xl font-semibold text-vahatra-forest">{item.year}</p>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-vahatra-ink text-white">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/52">Équipe</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Une équipe resserrée, terrain, finance et impact.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-lg border border-white/10 bg-white/8 p-6">
                <div className="grid size-14 place-items-center rounded-md bg-white text-lg font-bold text-vahatra-forest">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-vahatra-clay">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-white/66">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner} className="rounded-md border border-white/10 bg-white/8 px-5 py-4 text-sm text-white/78">
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
