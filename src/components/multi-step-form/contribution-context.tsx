"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useT } from "next-i18next/client";
import {
  createContext,
  use,
  useCallback,
  useMemo,
  useState,
  type BaseSyntheticEvent,
  type ReactNode
} from "react";
import { FormProvider, useForm } from "react-hook-form";
import { contributeMutationOptions } from "@/lib/api/contribute";
import { resultsQueryOptions } from "@/lib/api/results";
import { useNotify } from "@/lib/notifications/use-notify";
import { toContributePayload } from "./payload";
import { formSchema, type FormValues } from "./schema";
import { steps } from "./steps";
import { DonationType } from "./types";

const FIRST_STEP = 0;
const LAST_STEP = steps.length - 1;

type ContributionContextValue = {
  activeStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  isSubmitted: boolean;
  goToNextStep: () => Promise<void>;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  submit: (event?: BaseSyntheticEvent) => Promise<void>;
  restart: () => void;
};

const ContributionContext = createContext<ContributionContextValue | null>(
  null
);

export function useContribution() {
  const context = use(ContributionContext);

  if (!context) {
    throw new Error(
      "useContribution must be used within a ContributionProvider"
    );
  }

  return context;
}

export function ContributionProvider({ children }: { children: ReactNode }) {
  const { t } = useT();
  const [activeStep, setActiveStep] = useState(FIRST_STEP);
  const queryClient = useQueryClient();
  const notify = useNotify();

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      donationType: DonationType.FOUNDATION,
      amount: undefined,
      shelter: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      consent: false
    }
  });

  const contribute = useMutation({
    ...contributeMutationOptions(),
    onSuccess: () => {
      notify({ variant: "success", title: t("submit.success.toast") });

      return queryClient.invalidateQueries({
        queryKey: resultsQueryOptions().queryKey
      });
    },
    onError: () =>
      notify({
        variant: "error",
        title: t("submit.error.title"),
        description: t("submit.error.description")
      })
  });

  const { trigger, handleSubmit, reset } = methods;
  const { mutate, reset: resetMutation } = contribute;

  const goToNextStep = useCallback(async () => {
    const isStepValid = await trigger(steps[activeStep].fields, {
      shouldFocus: true
    });

    if (isStepValid) setActiveStep((current) => current + 1);
  }, [activeStep, trigger]);

  const goToPreviousStep = useCallback(
    () => setActiveStep((current) => current - 1),
    []
  );

  const restart = useCallback(() => {
    resetMutation();
    reset();
    setActiveStep(FIRST_STEP);
  }, [reset, resetMutation]);

  const submit = useMemo(
    () =>
      handleSubmit((values: FormValues) => mutate(toContributePayload(values))),
    [handleSubmit, mutate]
  );

  const value = useMemo<ContributionContextValue>(
    () => ({
      activeStep,
      isFirstStep: activeStep === FIRST_STEP,
      isLastStep: activeStep === LAST_STEP,
      isSubmitting: contribute.isPending,
      isSubmitted: contribute.isSuccess,
      goToNextStep,
      goToPreviousStep,
      goToStep: setActiveStep,
      submit,
      restart
    }),
    [
      activeStep,
      contribute.isPending,
      contribute.isSuccess,
      goToNextStep,
      goToPreviousStep,
      submit,
      restart
    ]
  );

  return (
    <ContributionContext value={value}>
      <FormProvider {...methods}>{children}</FormProvider>
    </ContributionContext>
  );
}
