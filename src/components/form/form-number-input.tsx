"use client";

import { NumberInput, type NumberInputProps } from "@mantine/core";
import { useT } from "next-i18next/client";
import { useController, type FieldValues } from "react-hook-form";
import type { ControlledFieldProps, ControlledProp } from "./types";

export type FormNumberInputProps<T extends FieldValues> =
  ControlledFieldProps<T> & Omit<NumberInputProps, ControlledProp>;

export function FormNumberInput<T extends FieldValues>({
  name,
  control,
  ...inputProps
}: FormNumberInputProps<T>) {
  const { t } = useT();
  const {
    field: { value, ...field },
    fieldState
  } = useController({ name, control });

  const message = fieldState.error?.message;

  return (
    <NumberInput
      {...inputProps}
      {...field}
      value={value ?? ""}
      error={message && t(message)}
    />
  );
}
