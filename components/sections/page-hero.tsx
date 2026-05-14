import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-vahatra-ink pt-28 text-white", className)}>
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="absolute inset-0 -z-20 object-cover opacity-45"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 image-vignette" />
      <div className="container grid min-h-[56vh] content-end pb-14 pt-16 md:pb-20">
        <div className="max-w-3xl">
          <Badge variant="warm" className="border-white/10 bg-white/12 text-white">
            {eyebrow}
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.03] tracking-normal md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{description}</p>
        </div>
      </div>
    </section>
  );
}
