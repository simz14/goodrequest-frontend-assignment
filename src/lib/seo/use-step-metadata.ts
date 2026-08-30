"use client";

import { useEffect } from "react";
import { DEFAULT_SEO_STEP, type SeoStepKey } from "./steps";

export const useStepMetadata = ({
  step,
  title
}: {
  step: SeoStepKey;
  title: string;
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (step === DEFAULT_SEO_STEP) {
      url.searchParams.delete("step");
    } else {
      url.searchParams.set("step", step);
    }

    if (url.href !== window.location.href) {
      window.history.replaceState(null, "", url);
    }
  }, [step]);
};
