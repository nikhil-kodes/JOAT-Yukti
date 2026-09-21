import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  collegeEmail: z.string().email("Invalid email format"),
  phoneNumber: z.string().regex(/^[0-9+\-\s]{10,15}$/, "Invalid phone number"),
  rollNumber: z.string().min(3, "Roll / Admission number is required").max(30),
  branch: z.string().min(2, "Branch is required").max(50),
  otherBranch: z.string().max(50).optional(),
  year: z.enum(["1", "2", "3", "4"], {
    message: "Year is required"
  }),
  section: z.string().max(10).optional(),
  programmingExperience: z.enum(["beginner", "intermediate", "advanced"], {
    message: "Experience level required"
  }),
  preferredLanguage: z.enum(["cpp", "java", "python", "javascript"], {
    message: "Preferred language required"
  }),
  githubUrl: z.union([z.string().url("Must be a valid URL"), z.literal(""), z.undefined()]),
  consentGiven: z.literal(true, {
    message: "You must accept the rules and consent."
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
