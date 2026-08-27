import type { Control, FieldPath, FieldValues } from "react-hook-form";

export type ControlledFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control?: Control<T>;
};

export type ControlledProp =
  "name" | "value" | "defaultValue" | "onChange" | "onBlur" | "error";
