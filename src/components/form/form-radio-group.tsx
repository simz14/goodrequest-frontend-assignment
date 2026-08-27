"use client";

import { RadioGroup, type RadioGroupProps } from "@mantine/core";
import { useT } from "next-i18next/client";
import { useController, type FieldValues } from "react-hook-form";
import type { ControlledFieldProps, ControlledProp } from "./types";

export type FormRadioGroupProps<T extends FieldValues> =
  ControlledFieldProps<T> & Omit<RadioGroupProps, ControlledProp>;

export function FormRadioGroup<T extends FieldValues>({
  name,
  control,
  children,
  ...props
}: FormRadioGroupProps<T>) {
  const { t } = useT();
  const {
    field: { value, ...field },
    fieldState
  } = useController({ name, control });

  const message = fieldState.error?.message;

  return (
    <RadioGroup
      {...props}
      {...field}
      value={value ?? ""}
      error={message && t(message)}
    >
      {children}
    </RadioGroup>
  );
}
