"use client";

import { ContributionProvider } from "./contribution-context";
import ContributionForm from "./contribution-form";

export default function MultiStepForm() {
  return (
    <ContributionProvider>
      <ContributionForm />
    </ContributionProvider>
  );
}
