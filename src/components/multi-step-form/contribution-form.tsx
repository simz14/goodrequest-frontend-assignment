"use client";

import { Group, Stepper } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { useContribution } from "./contribution-context";
import { StyledStepper } from "./contribution-form.styles";
import ContributionSuccess from "./contribution-success";
import { StyledActionButton } from "./shared.styles";
import { steps } from "./steps";
import { useStepMetadata } from "@/lib/seo/use-step-metadata";

export default function ContributionForm() {
  const { t } = useT();
  const {
    activeStep,
    isFirstStep,
    isLastStep,
    isSubmitting,
    isSubmitted,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    submit
  } = useContribution();

  const stepKey = isSubmitted ? "success" : steps[activeStep].id;

  useStepMetadata({
    step: stepKey,
    title: t(`seo.steps.${stepKey}.title`)
  });

  if (isSubmitted) return <ContributionSuccess />;

  return (
    <form onSubmit={submit}>
      <StyledStepper
        active={activeStep}
        onStepClick={goToStep}
        allowNextStepsSelect={false}
        completedIcon={<IconCheck size={18} />}
      >
        {steps.map(({ id, labelKey, Component }) => (
          <Stepper.Step key={id} label={t(labelKey)}>
            <Component />
          </Stepper.Step>
        ))}
      </StyledStepper>

      <Group justify="space-between" mt="xl">
        <StyledActionButton
          type="button"
          variant="default"
          onClick={goToPreviousStep}
          disabled={isFirstStep || isSubmitting}
          leftSection={<IconArrowLeft size={18} />}
        >
          {t("actions.back")}
        </StyledActionButton>

        {isLastStep ? (
          <StyledActionButton key="submit" type="submit" loading={isSubmitting}>
            {t("actions.submit")}
          </StyledActionButton>
        ) : (
          <StyledActionButton
            key="next"
            type="button"
            onClick={goToNextStep}
            rightSection={<IconArrowRight size={18} />}
          >
            {t("actions.next")}
          </StyledActionButton>
        )}
      </Group>
    </form>
  );
}
