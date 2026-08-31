"use client";

import Link from "next/link";
import styled from "styled-components";

import { media } from "@/lib/mantine/theme";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-block: 24px;
  border-top: 1px solid var(--app-content-quintarny);

  ${media.xs} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: inline-flex;
`;

export const StyledFooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${media.xs} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ${media.xs} {
    gap: 24px;
  }
`;

export const StyledNavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--app-content-secondary);
  transition: color 150ms ease;

  &:hover,
  &:focus-visible {
    color: var(--app-content-primary);
  }
`;
