import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

import { contact, mainNavigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-vahatra-ink text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_0.75fr] lg:py-18">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-white text-sm font-black text-vahatra-forest">
              V
            </span>
            <div>
              <p className="font-bold tracking-[0.18em]">ONG VAHATRA</p>
              <p className="text-sm text-white/62">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-white/68">{siteConfig.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="light" size="sm">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <a href={contact.facebook} target="_blank" rel="noreferrer">
                <Facebook />
                Facebook
              </a>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">Navigation</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">Coordonnées</h2>
          <ul className="mt-5 grid gap-4 text-sm text-white/72">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-vahatra-clay" />
              <span>{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-vahatra-clay" />
              <span>{contact.phones.join(" / ")}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-vahatra-clay" />
              <span>{contact.emails[0]}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ONG VAHATRA. Démo institutionnelle premium.</p>
          <p>Conçu pour partenaires, bailleurs et communautés rurales.</p>
        </div>
      </div>
    </footer>
  );
}
