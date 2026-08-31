"use client";

import { Checkbox } from "@mantine/core";
import styled from "styled-components";

export const StyledFormCheckbox = styled(Checkbox)`
  --checkbox-size: 16px;
  --mantine-cursor-type: pointer;

  && {
    --checkbox-icon-color: var(--mantine-primary-color-filled);
  }

  .mantine-Checkbox-body {
    align-items: flex-start;
  }

  .mantine-Checkbox-input:checked {
    background-color: var(--mantine-color-brand-1);
  }

  .mantine-Checkbox-icon {
    width: 10px;
    height: auto;
  }

  .mantine-Checkbox-label {
    color: var(--app-content-secondary);
  }
`;
