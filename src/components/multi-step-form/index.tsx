"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper, Group } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PersonalInfoStep from "./steps/personal-info";
import SummaryStep from "./steps/summary";
import ChooseShelterStep from "./steps/choose-shelter";
import { formSchema, stepFields, type FormValues } from "./schema";
import { useT } from "next-i18next/client";
import { StyledActionButton, StyledStepper } from "./index.styles";
import { DonationType } from "./types";
import { contributeMutationOptions } from "@/lib/api/contribute";
import { resultsQueryOptions } from "@/lib/api/results";
import { toContributePayload } from "./payload";
import ContributionSuccess from "./contribution-success";
import { useNotify } from "@/lib/notifications/use-notify";

const LAST_STEP = stepFields.length - 1;

export default function MultiStepForm() {
  const { t } = useT();
  const [active, setActive] = useState(0);
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

  const nextStep = async () => {
    const isStepValid = await methods.trigger(stepFields[active], {
      shouldFocus: true
    });
    if (isStepValid) setActive((current) => Math.min(current + 1, LAST_STEP));
  };

  const prevStep = () => setActive((current) => Math.max(current - 1, 0));

  const restart = () => {
    contribute.reset();
    methods.reset();
    setActive(0);
  };

  const onSubmit = (values: FormValues) =>
    contribute.mutate(toContributePayload(values));

  if (contribute.isSuccess) return <ContributionSuccess onRestart={restart} />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <StyledStepper active={active} completedIcon={<IconCheck size={18} />}>
          <Stepper.Step label={t("steps.chooseShelter.label")}>
            <ChooseShelterStep />
          </Stepper.Step>
          <Stepper.Step label={t("steps.personalInfo.label")}>
            <PersonalInfoStep />
          </Stepper.Step>
          <Stepper.Step label={t("steps.summary.label")}>
            <SummaryStep />
          </Stepper.Step>
        </StyledStepper>

        <Group justify="space-between" mt="xl">
          <StyledActionButton
            type="button"
            variant="default"
            onClick={prevStep}
            disabled={active === 0 || contribute.isPending}
            leftSection={<IconArrowLeft size={18} />}
          >
            {t("actions.back")}
          </StyledActionButton>
          {active === LAST_STEP ? (
            <StyledActionButton
              key="submit"
              type="submit"
              loading={contribute.isPending}
            >
              {t("actions.submit")}
            </StyledActionButton>
          ) : (
            <StyledActionButton
              key="next"
              type="button"
              onClick={nextStep}
              rightSection={<IconArrowRight size={18} />}
            >
              {t("actions.next")}
            </StyledActionButton>
          )}
        </Group>
      </form>
    </FormProvider>
  );
}
