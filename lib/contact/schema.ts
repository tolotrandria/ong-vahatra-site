import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Votre nom est requis.").max(120, "Le nom est trop long."),
  email: z.string().email("Adresse email invalide."),
  organization: z
    .string()
    .min(2, "L'organisation est requise.")
    .max(160, "Le nom de l'organisation est trop long."),
  message: z
    .string()
    .min(20, "Merci d'ajouter quelques details.")
    .max(3000, "Le message est trop long."),
});

export type ContactMessageValues = z.infer<typeof contactMessageSchema>;
