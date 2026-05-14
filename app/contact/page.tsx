import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/contact",
  title: "Contact - ONG VAHATRA",
  description:
    "Contacter ONG VAHATRA à Tomboarivo, Antsirabe, Madagascar: email, téléphone, WhatsApp, Facebook et formulaire.",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Entrer en relation avec l'équipe VAHATRA à Antsirabe."
        description="Partenariat, information projet, mission terrain ou collaboration institutionnelle: l'équipe peut être contactée directement."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1800"
      />

      <section className="section-padding bg-background">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            <Card className="border-vahatra-forest/10 bg-white shadow-soft">
              <CardContent className="p-6">
                <Badge variant="warm">Coordonnées</Badge>
                <ul className="mt-6 grid gap-5">
                  <li className="flex gap-3">
                    <MapPin className="mt-1 size-5 text-vahatra-leaf" />
                    <span>{contact.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-1 size-5 text-vahatra-leaf" />
                    <span>{contact.phones.join(" / ")}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-1 size-5 text-vahatra-leaf" />
                    <span>{contact.emails.join(" / ")}</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={contact.facebook} target="_blank" rel="noreferrer">
                      <Facebook />
                      Facebook
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-vahatra-forest/10 bg-vahatra-cream shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,71,52,0.08)_1px,transparent_1px),linear-gradient(rgba(18,71,52,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-vahatra-forest text-white shadow-editorial">
                <MapPin className="size-7" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/92 p-5 shadow-soft">
                <p className="font-semibold">Tomboarivo, Antsirabe</p>
                <p className="mt-1 text-sm text-muted-foreground">Google Maps placeholder pour la démo client.</p>
              </div>
            </div>
          </div>

          <Card className="border-vahatra-forest/10 bg-white shadow-soft">
            <CardContent className="p-6 md:p-8">
              <Badge variant="blue">Formulaire</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                Présenter une demande de partenariat ou de contact terrain.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Le formulaire enregistre les demandes dans Supabase dès que les variables du projet
                sont ajoutées dans Vercel.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
