"use client";

import { FormTextInput } from "@/components/form";
import { filledInputSkin } from "@/components/form/form-field.styles";
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
