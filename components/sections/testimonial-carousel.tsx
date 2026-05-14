"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="min-w-0 flex-[0_0_92%] sm:flex-[0_0_58%] lg:flex-[0_0_42%]">
              <Card className="h-full border-vahatra-forest/10 bg-white shadow-soft">
                <CardContent className="flex h-full flex-col p-7">
                  <Quote className="size-8 text-vahatra-clay" />
                  <blockquote className="mt-6 text-xl leading-9 text-vahatra-ink">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="mt-8 border-t border-border pt-5">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Témoignage précédent">
          <ChevronLeft />
        </Button>
        <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Témoignage suivant">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
