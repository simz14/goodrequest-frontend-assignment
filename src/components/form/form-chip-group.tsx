"use client";

import { Chip, type ChipProps } from "@mantine/core";
import type { ReactNode } from "react";
import { useController, type FieldValues } from "react-hook-form";
import type { ControlledFieldProps, ControlledProp } from "./types";

export type FormChipGroupOption = {
  label: ReactNode;
  value: number;
};

export type FormChipGroupProps<T extends FieldValues> =
  ControlledFieldProps<T> & {
    options: readonly FormChipGroupOption[];
  } & Omit<ChipProps, ControlledProp | "checked" | "children">;

export function FormChipGroup<T extends FieldValues>({
  name,
  control,
  options,
  ...chipProps
}: FormChipGroupProps<T>) {
  const {
    field: { value, onChange, onBlur }
  } = useController({ name, control });

  return (
    <Chip.Group
      value={value == null || value === "" ? null : String(value)}
      onChange={(next) => onChange(next === "" ? "" : Number(next))}
    >
      {options.map((option) => (
        <Chip
          {...chipProps}
          key={option.value}
          value={String(option.value)}
          icon={null}
          onBlur={onBlur}
        >
          {option.label}
        </Chip>
      ))}
    </Chip.Group>
  );
}
