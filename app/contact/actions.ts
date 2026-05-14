"use server";

import { contactMessageSchema, type ContactMessageValues } from "../../lib/contact/schema";
import { createSupabaseServerClient } from "../../lib/supabase/server";

export type ContactMessageState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactMessage(
  values: ContactMessageValues,
): Promise<ContactMessageState> {
  const parsed = contactMessageSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Merci de vérifier les informations du formulaire.",
    };
  }

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      status: "error",
      message:
        "Supabase n'est pas encore configure. Merci de contacter l'equipe par email ou WhatsApp.",
    };
  }

  const { error } = await supabase.from("contact_messages").insert({
    ...parsed.data,
    source: "website",
  });

  if (error) {
    return {
      status: "error",
      message: "Le message n'a pas pu être enregistré. Merci de contacter l'équipe par email.",
    };
  }

  return {
    status: "success",
    message: "Merci. Votre message a bien été enregistré.",
  };
}
