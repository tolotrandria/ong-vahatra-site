import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { regionalCoverage } from "@/data/impact";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/impact",
  title: "Impact - ONG VAHATRA",
  description:
    "Dashboard d'impact institutionnel de l'ONG VAHATRA: familles accompagnées, bénéficiaires, régions couvertes et projets actifs.",
});

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Impact"
        title="Un pilotage lisible pour suivre ce qui change réellement dans les familles."
        description="Cette démo présente une structure de dashboard prête à accueillir les données officielles de l'ONG."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-vahatra-cream">
        <div className="container">
          <Reveal className="mb-10 max-w-3xl">
            <Badge variant="warm">Tableau de bord</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Données synthétiques pour bailleurs, équipes terrain et partenaires.
            </h2>
          </Reveal>
          <ImpactDashboard />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <Reveal className="max-w-3xl">
            <Badge variant="blue">Carte opérationnelle</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Couverture prioritaire dans les hautes terres de Madagascar.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {regionalCoverage.map((region) => (
              <div key={region.region} className="rounded-lg border border-border bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-vahatra-earth">
                  {region.communes} communes
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{region.region}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{region.note}</p>
                <p className="mt-5 text-3xl font-semibold text-vahatra-forest">
                  {region.families.toLocaleString("fr-FR")}
                </p>
                <p className="text-sm text-muted-foreground">familles suivies</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
