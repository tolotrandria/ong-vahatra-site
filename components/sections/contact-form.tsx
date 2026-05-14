"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { submitContactMessage, type ContactMessageState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactMessageSchema, type ContactMessageValues } from "@/lib/contact/schema";

export function ContactForm() {
  const [submission, setSubmission] = useState<ContactMessageState>({
    status: "idle",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMessageValues>({
    resolver: zodResolver(contactMessageSchema),
  });

  const onSubmit = async (values: ContactMessageValues) => {
    const result = await submitContactMessage(values);
    setSubmission(result);

    if (result.status === "success") {
      reset();
    }
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
      {submission.status !== "idle" ? (
        <p className="rounded-md bg-vahatra-leaf/10 px-4 py-3 text-sm font-medium text-vahatra-forest">
          {submission.message}
        </p>
      ) : null}
    </form>
  );
}
