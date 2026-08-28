"use client";

import {
  Combobox,
  InputBase,
  InputLabel,
  TextInput,
  useCombobox,
  type TextInputProps
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import CZ from "country-flag-icons/react/3x2/CZ";
import SK from "country-flag-icons/react/3x2/SK";
import { useT } from "next-i18next/client";
import { useId } from "react";
import { useController, type FieldValues } from "react-hook-form";
import { StyledFormPhoneInput } from "./form-phone-input.styles";
import type { ControlledFieldProps, ControlledProp } from "./types";

const NATIONAL_NUMBER_LENGTH = 9;

const countries = [
  { value: "+421", Flag: SK },
  { value: "+420", Flag: CZ }
];

const parsePhoneInput = (input: string, fallbackPrefix: string) => {
  const digits = input.replace(/\D/g, "");
  const prefixMatch = digits.match(/^(?:00)?(42[01])(?=\d{9}$)/);
  const nationalNumber = (
    prefixMatch ? digits.slice(prefixMatch[0].length) : digits
  )
    .replace(/^0+/, "")
    .slice(0, NATIONAL_NUMBER_LENGTH);

  const prefix = prefixMatch ? `+${prefixMatch[1]}` : fallbackPrefix;

  return `${prefix}${nationalNumber}`;
};

export type FormPhoneInputProps<T extends FieldValues> =
  ControlledFieldProps<T> & Omit<TextInputProps, ControlledProp>;

export function FormPhoneInput<T extends FieldValues>({
  name,
  control,
  ...inputProps
}: FormPhoneInputProps<T>) {
  const { t } = useT();
  const inputId = useId();
  const { field, fieldState } = useController({ name, control });
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });

  const country =
    countries.find((c) => field.value?.startsWith(c.value)) ?? countries[0];
  const number = (field.value ?? "").slice(country.value.length);
  const message = fieldState.error?.message;
  const SelectedFlag = country.Flag;

  return (
    <StyledFormPhoneInput>
      <InputLabel htmlFor={inputId}>{t("form.phoneNumber")}</InputLabel>
      <div className="fields-wrapper">
        <Combobox
          store={combobox}
          withinPortal={false}
          onOptionSubmit={(value) => {
            field.onChange(`${value}${number}`);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <InputBase
              className="country-select"
              component="button"
              type="button"
              pointer
              aria-label={`${t("form.phonePrefix")} ${country.value}`}
              onClick={() => combobox.toggleDropdown()}
            >
              <span className="flag">
                <SelectedFlag />
              </span>
              <IconChevronDown size={16} />
            </InputBase>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              {countries.map(({ value, Flag }) => (
                <Combobox.Option value={value} key={value}>
                  <span className="flag">
                    <Flag />
                  </span>
                  <span className="dial-code">{value}</span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>

        <TextInput
          placeholder={t("form.phoneNumberPlaceholder")}
          {...inputProps}
          id={inputId}
          inputMode="tel"
          value={number}
          onChange={(event) =>
            field.onChange(
              parsePhoneInput(event.currentTarget.value, country.value)
            )
          }
          onBlur={field.onBlur}
          error={message && t(message)}
          leftSection={<div>{country.value}</div>}
        />
      </div>
    </StyledFormPhoneInput>
  );
}
