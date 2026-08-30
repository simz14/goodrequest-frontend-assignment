export const seoStepKeys = [
  "chooseShelter",
  "personalInfo",
  "summary",
  "success"
] as const;

export type SeoStepKey = (typeof seoStepKeys)[number];

export const DEFAULT_SEO_STEP: SeoStepKey = "chooseShelter";

export const parseStepParam = (
  value: string | string[] | undefined
): SeoStepKey => seoStepKeys.find((key) => key === value) ?? DEFAULT_SEO_STEP;
