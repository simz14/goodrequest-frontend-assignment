"use client";

import { Select, type SelectProps } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { useController, type FieldValues } from "react-hook-form";
import type { ControlledFieldProps, ControlledProp } from "./types";

export type FormSelectProps<T extends FieldValues> = ControlledFieldProps<T> &
  Omit<SelectProps, ControlledProp>;

export function FormSelect<T extends FieldValues>({
  name,
  control,
  ...props
}: FormSelectProps<T>) {
  const { t } = useT();
  const {
    field: { value, onChange, ...field },
    fieldState
  } = useController({ name, control });

  const message = fieldState.error?.message;

  return (
    <Select
      rightSection={<IconChevronDown size={20} />}
      rightSectionPointerEvents="none"
      {...props}
      {...field}
      value={value ?? ""}
      onChange={(next) => onChange(next ?? "")}
      error={message && t(message)}
    />
  );
}
