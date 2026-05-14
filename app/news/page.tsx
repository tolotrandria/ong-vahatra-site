import Image from "next/image";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { newsArticles } from "@/data/news";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/news",
  title: "Actualités - ONG VAHATRA",
  description:
    "Articles, portraits terrain, programmes et annonces institutionnelles de l'ONG VAHATRA.",
});

export default function NewsPage() {
  const [lead, ...articles] = newsArticles;

  return (
    <main>
      <PageHero
        eyebrow="Actualités"
        title="Un magazine terrain pour raconter l'impact, les projets et les apprentissages."
        description="Des contenus éditoriaux réalistes pour donner au site une présence active et crédible."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-background">
        <div className="container">
          <Reveal>
            <article className="grid overflow-hidden rounded-lg border border-border bg-white shadow-editorial lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <div className="p-7 md:p-10">
                <Badge variant="warm">{lead.category}</Badge>
                <p className="mt-5 text-sm text-muted-foreground">{lead.date}</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">{lead.excerpt}</p>
              </div>
            </article>
          </Reveal>

          <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <StaggerItem key={article.title}>
                <article className="h-full overflow-hidden rounded-lg border border-border bg-white shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <Badge variant="blue">{article.category}</Badge>
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-tight">{article.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
