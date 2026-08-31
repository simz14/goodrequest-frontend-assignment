"use client";

import Link from "next/link";
import styled from "styled-components";

export const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--app-action-primary);
  transition: color 150ms ease;

  &:hover,
  &:focus-visible {
    color: var(--mantine-color-brand-7);
  }
`;
