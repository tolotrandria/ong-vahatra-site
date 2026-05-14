import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-vahatra-forest py-12 text-white md:py-16">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/54">Partenariats</p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Construire avec VAHATRA des réponses économiques durables pour les familles rurales.
          </h2>
        </div>
        <Button asChild variant="light" size="lg">
          <Link href="/contact">
            Ouvrir une discussion
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
