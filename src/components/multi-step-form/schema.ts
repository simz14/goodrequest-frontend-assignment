import z from "zod";
import { DonationType } from "./types";

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

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, "validation.minLength")
    .max(20, "validation.maxLength"),
  lastName: z
    .string()
    .min(2, "validation.minLength")
    .max(30, "validation.maxLength"),
  email: z.email("validation.email"),
  phoneNumber: z.string().min(1, "validation.required")
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

export type FormValues = z.infer<typeof formSchema>;

export const stepFields = [
  chooseShelterSchema,
  personalInfoSchema,
  summarySchema
].map((schema) => Object.keys(schema.shape) as (keyof FormValues)[]);
