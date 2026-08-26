"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper, Button, Group } from "@mantine/core";
import { useState } from "react";
import PersonalInfoStep from "./steps/personal-info";
import SummaryStep from "./steps/summary";
import ChooseShelterStep from "./steps/choose-shelter";
import { formSchema, stepFields, type FormValues } from "./schema";
import { useT } from "next-i18next/client";

const LAST_STEP = stepFields.length - 1;

export default function MultiStepForm() {
  const { t } = useT();
  const [active, setActive] = useState(0);

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      donationType: undefined,
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
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="First step" description="Choose a shelter">
            <ChooseShelterStep />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Personal info">
            <PersonalInfoStep />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Summary">
            <SummaryStep />
          </Stepper.Step>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button
            type="button"
            variant="default"
            onClick={prevStep}
            disabled={active === 0}
          >
            {t("actions.back")}
          </Button>
          {active === LAST_STEP ? (
            <Button key="submit" type="submit">
              {t("actions.submit")}
            </Button>
          ) : (
            <Button key="next" type="button" onClick={nextStep}>
              {t("actions.next")}
            </Button>
          )}
        </Group>
      </form>
    </FormProvider>
  );
}
