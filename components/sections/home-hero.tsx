"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteStats } from "@/data/site";

const heroImage =
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=85&w=2200";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full max-w-full overflow-hidden bg-vahatra-ink text-white md:min-h-[94svh]">
      <Image
        src={heroImage}
        alt="Familles rurales accompagnées à Madagascar"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,24,19,0.92),rgba(10,24,19,0.58)_48%,rgba(10,24,19,0.28)),linear-gradient(180deg,rgba(10,24,19,0.15),rgba(10,24,19,0.72))]" />
      <div className="container grid min-h-[100svh] content-end pb-6 pt-24 md:min-h-[94svh] md:pb-10 md:pt-28">
        <div className="grid min-w-0 gap-6 md:gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl min-w-0"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62 sm:text-sm">
              Antsirabe · Madagascar
            </p>
            <h1 className="mt-5 max-w-[11ch] text-balance text-4xl font-semibold leading-[1.02] tracking-normal sm:max-w-4xl sm:text-6xl sm:leading-[0.98] lg:text-7xl">
              Finance sociale et dignité rurale pour les familles de Madagascar.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:mt-6 md:text-xl md:leading-8">
              ONG VAHATRA relie microcrédit, agriculture, santé et accompagnement social
              pour transformer la vulnérabilité en résilience durable.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <Button
                asChild
                variant="light"
                size="lg"
                className="w-full bg-white text-vahatra-forest hover:bg-white/90 sm:w-auto"
              >
                <Link href="/impact">
                  Voir l’impact
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/24 bg-white/8 text-white hover:bg-white/14 sm:w-auto"
              >
                <Link href="/about">
                  <PlayCircle />
                  Comprendre VAHATRA
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid min-w-0 grid-cols-2 gap-2 rounded-lg border border-white/12 bg-white/10 p-2 backdrop-blur-md sm:gap-3 sm:p-3"
          >
            {siteStats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="min-w-0 rounded-md bg-white/10 p-3 sm:p-4">
                <p className="text-xl font-semibold sm:text-2xl">
                  {stat.value.toLocaleString("fr-FR")}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/68">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
