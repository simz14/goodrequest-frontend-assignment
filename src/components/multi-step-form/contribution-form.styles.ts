"use client";

import { Stepper } from "@mantine/core";
import styled from "styled-components";

export const StyledStepper = styled(Stepper)`
  &&& {
    --stepper-icon-size: 36px;
    --stepper-fz: 1rem;
    --stepper-outline-thickness: 1px;
    --stepper-outline-color: var(--app-content-quintarny);
    --stepper-content-padding: 40px;
    margin-top: 40px;
  }

  .mantine-Stepper-stepIcon {
    background-color: var(--app-surface-primary);
    border-color: var(--stepper-outline-color);
    color: var(--app-content-quintarny);
    font-weight: 500;
  }

  .mantine-Stepper-stepIcon[data-progress] {
    background-color: var(--stepper-color);
    border-color: var(--stepper-color);
    color: var(--app-inverse-content-primary);
  }

  .mantine-Stepper-stepIcon[data-completed] {
    background-color: var(--app-surface-primary);
    border-color: var(--stepper-color);
  }

  .mantine-Stepper-stepCompletedIcon {
    color: var(--stepper-color);
  }

  .mantine-Stepper-stepBody {
    margin-inline-start: 12px;
  }

  .mantine-Stepper-stepLabel {
    color: var(--app-content-quintarny);
    font-size: var(--stepper-fz);
    font-weight: 500;
    white-space: nowrap;
    transition: color 150ms ease;
  }

  .mantine-Stepper-step[data-progress] .mantine-Stepper-stepLabel,
  .mantine-Stepper-step[data-completed] .mantine-Stepper-stepLabel {
    color: var(--app-content-primary);
  }

  .mantine-Stepper-separator {
    margin-inline: 24px;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    &&& {
      --stepper-icon-size: 32px;
      --stepper-fz: 0.875rem;
      --stepper-content-padding: 24px;
    }

    .mantine-Stepper-separator {
      margin-inline: 12px;
    }
  }

  @media (max-width: 480px) {
    .mantine-Stepper-step:not([data-progress]) .mantine-Stepper-stepBody {
      display: none;
    }
  }
`;
