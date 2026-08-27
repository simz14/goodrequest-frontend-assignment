"use client";

import { Checkbox, type CheckboxProps } from "@mantine/core";
import { useT } from "next-i18next/client";
import { useController, type FieldValues } from "react-hook-form";
import type { ControlledFieldProps, ControlledProp } from "./types";

export type FormCheckboxProps<T extends FieldValues> = ControlledFieldProps<T> &
  Omit<CheckboxProps, ControlledProp | "checked">;

export function FormCheckbox<T extends FieldValues>({
  name,
  control,
  ...inputProps
}: FormCheckboxProps<T>) {
  const { t } = useT();
  const {
    field: { value, onChange, ...field },
    fieldState
  } = useController({ name, control });

  const message = fieldState.error?.message;

  return (
    <Checkbox
      {...inputProps}
      {...field}
      checked={value ?? false}
      onChange={(event) => onChange(event.currentTarget.checked)}
      error={message && t(message)}
    />
  );
}
