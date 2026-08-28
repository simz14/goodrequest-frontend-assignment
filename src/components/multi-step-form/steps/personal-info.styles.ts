"use client";

import { FormTextInput } from "@/components/form";
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
    background-color: var(--app-surface-tertiary);
    color: var(--app-content-primary);
    border: none;
    padding: 16px;
    height: auto;
    min-height: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const StyledFullWidthField = styled(FormTextInput)`
  grid-column: 1 / -1;
`;
