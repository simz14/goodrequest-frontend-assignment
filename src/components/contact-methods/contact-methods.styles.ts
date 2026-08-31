"use client";

import styled from "styled-components";
import { StyledTypography } from "@/components/ui/typography.styles";

import { media } from "@/lib/mantine/theme";

const ICON_BOX_SIZE = "48px";

export const StyledContactMethods = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  list-style: none;

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const StyledContactMethod = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${ICON_BOX_SIZE};
  height: ${ICON_BOX_SIZE};
  margin-bottom: 20px;
  border-radius: var(--mantine-radius-md, 8px);
  color: var(--app-action-primary);
  background: var(--mantine-color-brand-0);
`;

export const StyledContactTitle = styled(StyledTypography)`
  margin-bottom: 8px;
`;

export const StyledContactDescription = styled(StyledTypography)`
  margin-bottom: 20px;
`;

export const StyledContactLink = styled(StyledTypography)`
  overflow-wrap: anywhere;
  transition: color 150ms ease;

  &:hover,
  &:focus-visible {
    color: var(--mantine-color-brand-7);
  }
`;
