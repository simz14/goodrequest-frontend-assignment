"use client";

import { FormTextInput } from "@/components/form";
import { filledInputSkin } from "@/components/form/form-field.styles";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
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
