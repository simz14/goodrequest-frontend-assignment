"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper, Group } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import PersonalInfoStep from "./steps/personal-info";
import SummaryStep from "./steps/summary";
import ChooseShelterStep from "./steps/choose-shelter";
import { formSchema, stepFields, type FormValues } from "./schema";
import { useT } from "next-i18next/client";
import { StyledActionButton, StyledStepper } from "./index.styles";
import { DonationType } from "./types";

const LAST_STEP = stepFields.length - 1;

export default function MultiStepForm() {
  const { t } = useT();
  const [active, setActive] = useState(0);

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

  const nextStep = async () => {
    const isStepValid = await methods.trigger(stepFields[active], {
      shouldFocus: true
    });
    if (isStepValid) setActive((current) => Math.min(current + 1, LAST_STEP));
  };

  const prevStep = () => setActive((current) => Math.max(current - 1, 0));

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

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
            disabled={active === 0}
            leftSection={<IconArrowLeft size={18} />}
          >
            {t("actions.back")}
          </StyledActionButton>
          {active === LAST_STEP ? (
            <StyledActionButton key="submit" type="submit">
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
