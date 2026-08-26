"use client";

import { Checkbox, type CheckboxProps } from "@mantine/core";
import { useT } from "next-i18next/client";
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues
} from "react-hook-form";

export type FormCheckboxProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control?: Control<T>;
} & Omit<
  CheckboxProps,
  | "name"
  | "value"
  | "checked"
  | "defaultValue"
  | "onChange"
  | "onBlur"
  | "error"
>;

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
