import Image from "next/image";
import { PlayCircle } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { galleryItems } from "@/data/gallery";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/gallery",
  title: "Galerie média - ONG VAHATRA",
  description:
    "Galerie photo et vidéo de terrain pour présenter les programmes et les communautés accompagnées par ONG VAHATRA.",
});

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Galerie média"
        title="Des images de terrain pour rendre visible la proximité et la dignité."
        description="Une galerie masonry immersive, prête à recevoir les vraies photos et vidéos de l'ONG."
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-vahatra-cream">
        <div className="container">
          <Reveal className="max-w-3xl">
            <Badge variant="warm">Terrain</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Une bibliothèque visuelle pour rapports, réseaux sociaux et dossiers bailleurs.
            </h2>
          </Reveal>
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryItems.map((item, index) => (
              <figure
                key={`${item.title}-${index}`}
                className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-vahatra-forest/10 bg-white shadow-soft"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={index % 3 === 0 ? 1100 : 720}
                    className="w-full object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {item.type === "video" ? (
                    <div className="absolute inset-0 grid place-items-center bg-vahatra-ink/28 text-white">
                      <PlayCircle className="size-14" />
                    </div>
                  ) : null}
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-4">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <Badge variant={item.type === "video" ? "blue" : "warm"}>{item.type}</Badge>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
