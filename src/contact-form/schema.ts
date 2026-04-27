import { z } from "zod";

import { PROJECT_TYPES } from "@/constants/contact-form";

export type ContactFormValidationMessages = {
  budgetRange: string;
  companyName: string;
  email: string;
  fullName: string;
  message: string;
  phone: string;
  projectType: string;
  source: string;
  urgency: string;
};

export function createContactFormSchema(
  messages: ContactFormValidationMessages,
) {
  return z.object({
    fullName: z.string().trim().min(3, messages.fullName),
    companyName: z.string().trim().min(2, messages.companyName),
    email: z.string().trim().email(messages.email),
    phone: z.string().trim().min(6, messages.phone),
    projectType: z.enum(PROJECT_TYPES, {
      error: messages.projectType,
    }),
    budgetRange: z.string().trim().min(1, messages.budgetRange),
    urgency: z.string().trim().min(1, messages.urgency),
    message: z.string().trim().min(20, messages.message),
    source: z.string().trim().min(1, messages.source),
  });
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
