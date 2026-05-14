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
    <section className="relative isolate min-h-[94svh] overflow-hidden bg-vahatra-ink text-white">
      <Image
        src={heroImage}
        alt="Familles rurales accompagnées à Madagascar"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,24,19,0.92),rgba(10,24,19,0.58)_48%,rgba(10,24,19,0.28)),linear-gradient(180deg,rgba(10,24,19,0.15),rgba(10,24,19,0.72))]" />
      <div className="container grid min-h-[94svh] content-end pb-8 pt-28 md:pb-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/62">
              Antsirabe · Madagascar
            </p>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Finance sociale et dignité rurale pour les familles de Madagascar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              ONG VAHATRA relie microcrédit, agriculture, santé et accompagnement social
              pour transformer la vulnérabilité en résilience durable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="light" size="lg">
                <Link href="/impact">
                  Voir l’impact
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/24 bg-white/8 text-white hover:bg-white/14"
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
            className="grid grid-cols-2 gap-3 rounded-lg border border-white/12 bg-white/10 p-3 backdrop-blur-md"
          >
            {siteStats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-md bg-white/10 p-4">
                <p className="text-2xl font-semibold">
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
