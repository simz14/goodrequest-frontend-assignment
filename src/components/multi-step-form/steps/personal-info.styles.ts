"use client";

import { FormTextInput } from "@/components/form";
import { filledInputSkin } from "@/components/form/form-field.styles";
import { StyledTypography } from "@/components/ui/typography.styles";
import { Button } from "@mantine/core";
import styled from "styled-components";

import { media } from "@/lib/mantine/theme";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;

  ${media.xs} {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .mantine-Input-input {
    ${filledInputSkin}
  }
`;

export const StyledFullWidthField = styled(FormTextInput)`
  grid-column: 1 / -1;
`;

export const StyledDonorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const StyledDonorItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  & + & {
    padding-top: 16px;
    border-top: 1px solid var(--app-content-quintarny);
  }
`;

export const StyledDonorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
`;

export const StyledDonorHeading = styled(StyledTypography)`
  flex: 1;
  min-width: 0;
`;

export const StyledDonorToggle = styled.button<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: ${({ $hasError }) =>
    $hasError ? "var(--mantine-color-error)" : "var(--app-content-primary)"};
`;

export const StyledDonorPreview = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--app-content-secondary);
`;

export const StyledChevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--app-content-secondary);
  transition: transform 200ms ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

export const StyledRemoveDonorButton = styled(Button)`
  flex-shrink: 0;
  padding: 0 8px;
`;

export const StyledAddDonorButton = styled(Button)`
  height: auto;
  padding: 16px 32px;
  align-self: flex-start;
`;
