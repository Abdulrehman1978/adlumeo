import { z } from "zod";

// Free Social Growth Audit Validation Schema
export const auditFormSchema = z.object({
  brand: z
    .string()
    .min(2, "Brand/Company name must be at least 2 characters")
    .max(100, "Brand name is too long"),
  socialUrl: z
    .string()
    .min(2, "Social profile handle or URL is required")
    .max(255, "Profile handle/URL is too long"),
  email: z
    .string()
    .email("Please provide a valid work email address")
    .max(255),
  phone: z
    .string()
    .max(50, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  budgetRange: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  marketingGoal: z
    .string()
    .max(255)
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .max(255)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .max(2000, "Message is too long")
    .optional()
    .or(z.literal("")),
  // Honeypot field for bot protection — must remain empty
  hp_company_field: z
    .string()
    .max(0, "Bot detected")
    .optional()
    .or(z.literal("")),
});

export type AuditFormValues = z.infer<typeof auditFormSchema>;

// Contact Form Validation Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(255),
  company: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .max(50)
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  budget: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message is too long"),
  // Honeypot field for bot protection
  hp_website_field: z
    .string()
    .max(0, "Bot detected")
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
