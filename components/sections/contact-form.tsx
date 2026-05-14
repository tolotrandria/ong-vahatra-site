"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Votre nom est requis."),
  email: z.string().email("Adresse email invalide."),
  organization: z.string().min(2, "L'organisation est requise."),
  message: z.string().min(20, "Merci d'ajouter quelques détails."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          Nom complet
        </label>
        <Input id="name" autoComplete="name" {...register("name")} aria-invalid={Boolean(errors.name)} />
        {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
        {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
      </div>
      <div className="grid gap-2">
        <label htmlFor="organization" className="text-sm font-semibold">
          Organisation
        </label>
        <Input id="organization" autoComplete="organization" {...register("organization")} aria-invalid={Boolean(errors.organization)} />
        {errors.organization ? <p className="text-sm text-destructive">{errors.organization.message}</p> : null}
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <Textarea id="message" {...register("message")} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
      </div>
      <Button disabled={isSubmitting} type="submit" size="lg">
        Envoyer la demande
        <Send />
      </Button>
      {submitted ? (
        <p className="rounded-md bg-vahatra-leaf/10 px-4 py-3 text-sm font-medium text-vahatra-forest">
          Message préparé. Dans une version connectée, il serait transmis à l’équipe VAHATRA.
        </p>
      ) : null}
    </form>
  );
}
