import z from "zod";
import { DonationType } from "./types";

export const MAX_DONORS = 5;

const shelterRefinement = (
  data: { donationType?: DonationType; shelter?: string },
  ctx: z.RefinementCtx
) => {
  if (data.donationType === DonationType.SHELTER && !data.shelter) {
    ctx.addIssue({
      code: "custom",
      path: ["shelter"],
      message: "validation.required"
    });
  }
};

export const chooseShelterSchema = z
  .object({
    donationType: z.enum(DonationType),
    amount: z.coerce.number("validation.number").min(1, "validation.required"),
    shelter: z.string().optional()
  })
  .superRefine(shelterRefinement);

export const donorSchema = z.object({
  firstName: z
    .string()
    .min(2, "validation.minLength")
    .max(20, "validation.maxLength"),
  lastName: z
    .string()
    .min(2, "validation.minLength")
    .max(30, "validation.maxLength"),
  email: z.email("validation.email"),
  phone: z
    .string()
    .min(1, "validation.required")
    .regex(/^\+42[01]\d{9}$/, "validation.phoneNumber")
});

export const personalInfoSchema = z.object({
  donors: z.array(donorSchema).min(1).max(MAX_DONORS)
});

export const summarySchema = z.object({
  consent: z.boolean().refine((checked) => checked, "validation.required")
});

export const formSchema = z
  .object({
    ...chooseShelterSchema.shape,
    ...personalInfoSchema.shape,
    ...summarySchema.shape
  })
  .superRefine(shelterRefinement);

export type Donor = z.infer<typeof donorSchema>;
export type FormValues = z.infer<typeof formSchema>;

export const emptyDonor: Donor = {
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
};
