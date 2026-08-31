"use client";

import { Group, RadioCard } from "@mantine/core";
import styled from "styled-components";

import { filledInputSkin } from "@/components/form/form-field.styles";

export const StyledRadioCard = styled(RadioCard)`
  padding: 16px 8px;
  text-align: center;
  flex-grow: 1;
  width: auto;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition:
    border-color 150ms ease,
    background-color 150ms ease;
  &[data-checked] {
    background-color: var(--app-action-primary);
    color: var(--app-inverse-content-primary);
  }
`;

export const StyledGroup = styled(Group)`
  display: flex;
  border: 1px solid var(--app-content-quintarny);
  border-radius: 12px;
  padding: 4px;
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const StyledAmountField = styled.div`
  --amount-fz: 64px;
  --amount-currency-fz: 32px;
  --amount-section-width: 100px;
  --amount-divider-gap: 10px;
  --amount-baseline-offset: 20px;

  width: 100%;
  max-width: 240px;
  margin-inline: auto;

  .mantine-NumberInput-input {
    height: auto;
    min-height: 0;
    padding: 0 0 12px;
    padding-inline-end: calc(
      var(--amount-section-width) + var(--amount-divider-gap)
    );
    border: none;
    border-bottom: 3px solid var(--app-action-primary);
    border-radius: 0;
    background-color: transparent;
    text-align: right;
    font-size: var(--amount-fz);
    font-weight: 300;
    line-height: 1.2;
    color: var(--app-content-primary);
  }

  .mantine-NumberInput-input::placeholder {
    color: var(--app-content-quaternary);
  }

  .mantine-NumberInput-input[data-error] {
    border-bottom-color: var(--mantine-color-error);
  }

  .mantine-NumberInput-section[data-position="right"] {
    width: var(--amount-section-width);
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: var(--amount-baseline-offset);
  }

  .mantine-NumberInput-error {
    margin-top: 8px;
    text-align: center;
  }

  @media (max-width: 480px) {
    --amount-fz: 48px;
    --amount-currency-fz: 24px;
    --amount-section-width: 80px;
    --amount-baseline-offset: 18px;
  }
`;

export const StyledCurrency = styled.span`
  display: flex;
  align-items: flex-end;
  gap: var(--amount-divider-gap);
  font-size: var(--amount-currency-fz);
  font-weight: 400;
  line-height: 1.2;
  color: var(--app-content-secondary);

  &::before {
    content: "";
    width: 1px;
    height: calc(var(--amount-fz) * 0.85);
    background-color: var(--app-content-secondary);
  }
`;

export const StyledAmountOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 12px;
  width: 100%;

  .mantine-Chip-root {
    width: 100%;
  }

  .mantine-Chip-label,
  .mantine-Chip-label[data-checked] {
    width: 100%;
    height: auto;
    padding: 12px 8px;
    border: none;
    border-radius: 10px;
    background-color: var(--app-action-secondary);
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: var(--app-content-secondary);
    transition:
      background-color 150ms ease,
      color 150ms ease;
  }

  .mantine-Chip-label:hover {
    background-color: var(--mantine-color-gray-2);
  }

  .mantine-Chip-label[data-checked] {
    background-color: var(--app-action-primary);
    color: var(--app-inverse-content-primary);
  }

  .mantine-Chip-label[data-checked]:hover {
    background-color: var(--mantine-color-brand-7);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    .mantine-Chip-label,
    .mantine-Chip-label[data-checked] {
      padding: 12px 4px;
      font-size: 14px;
    }
  }
`;

export const StyledAmountBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledSelectField = styled.div`
  .mantine-Select-label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--app-content-primary);
  }

  .mantine-Select-input {
    ${filledInputSkin}
    border-radius: 12px;
    padding-inline-end: calc(16px + var(--input-right-section-width, 36px));
  }

  .mantine-Select-input::placeholder {
    color: var(--app-content-quaternary);
  }

  .mantine-Select-input[data-error] {
    outline: 1px solid var(--mantine-color-error);
  }

  .mantine-Select-section[data-position="right"] {
    color: var(--app-content-primary);
  }

  .mantine-Select-error {
    margin-top: 8px;
  }
`;

export const StyledOptionalLabel = styled.span`
  margin-inline-start: 4px;
  font-weight: 400;
  color: var(--app-content-quaternary);
`;
