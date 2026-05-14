"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { mainNavigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-vahatra-ink/72 text-white backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="ONG VAHATRA accueil">
          <span className="grid size-10 place-items-center rounded-md bg-white text-sm font-black text-vahatra-forest">
            V
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.18em]">ONG VAHATRA</span>
            <span className="hidden text-xs text-white/68 sm:block">{siteConfig.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-white/76 transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/12 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="light" size="sm">
            <Link href="/contact">
              Devenir partenaire
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="light" size="icon" className="lg:hidden" aria-label="Ouvrir le menu">
              <Menu />
            </Button>
          </DialogTrigger>
          <DialogContent className="top-4 translate-y-0 border-white/10 bg-vahatra-ink text-white sm:top-6">
            <DialogHeader>
              <DialogTitle>ONG VAHATRA</DialogTitle>
            </DialogHeader>
            <nav className="grid gap-2 pt-2" aria-label="Navigation mobile">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium text-white/78 transition hover:bg-white/10 hover:text-white",
                    pathname === item.href && "bg-white/12 text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild variant="light" className="mt-3">
              <Link href="/contact">
                Contacter l’équipe
                <ArrowRight />
              </Link>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
