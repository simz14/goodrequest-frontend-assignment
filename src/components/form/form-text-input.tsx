"use client";

import { TextInput, type TextInputProps } from "@mantine/core";
import { useT } from "next-i18next/client";
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues
} from "react-hook-form";

export type FormTextInputProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control?: Control<T>;
} & Omit<
  TextInputProps,
  "name" | "value" | "defaultValue" | "onChange" | "onBlur" | "error"
>;

export function FormTextInput<T extends FieldValues>({
  name,
  control,
  ...inputProps
}: FormTextInputProps<T>) {
  const { t } = useT();
  const {
    field: { value, ...field },
    fieldState
  } = useController({ name, control });

  const message = fieldState.error?.message;

  return (
    <TextInput
      {...inputProps}
      {...field}
      value={value ?? ""}
      error={message && t(message)}
    />
  );
}
