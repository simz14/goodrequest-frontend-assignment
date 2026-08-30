import type { ComponentType } from "react";
import type { SeoStepKey } from "@/lib/seo/steps";
import {
  chooseShelterSchema,
  personalInfoSchema,
  summarySchema,
  type FormValues
} from "../schema";
import ChooseShelterStep from "./choose-shelter";
import PersonalInfoStep from "./personal-info";
import SummaryStep from "./summary";

export type Step = {
  id: Exclude<SeoStepKey, "success">;
  labelKey: string;
  fields: (keyof FormValues)[];
  Component: ComponentType;
};

const fieldsOf = (shape: object) => Object.keys(shape) as (keyof FormValues)[];

export const steps: readonly Step[] = [
  {
    id: "chooseShelter",
    labelKey: "steps.chooseShelter.label",
    fields: fieldsOf(chooseShelterSchema.shape),
    Component: ChooseShelterStep
  },
  {
    id: "personalInfo",
    labelKey: "steps.personalInfo.label",
    fields: fieldsOf(personalInfoSchema.shape),
    Component: PersonalInfoStep
  },
  {
    id: "summary",
    labelKey: "steps.summary.label",
    fields: fieldsOf(summarySchema.shape),
    Component: SummaryStep
  }
];
