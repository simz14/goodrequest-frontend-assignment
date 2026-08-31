"use client";

import styled from "styled-components";

import { StyledTypography } from "@/components/ui/typography.styles";

import { media } from "@/lib/mantine/theme";

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const StyledSummaryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;

  &:not(:first-of-type) {
    padding-top: 24px;
    border-top: 1px solid var(--app-content-quintarny);
  }

  &:last-of-type {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--app-content-quintarny);
  }
`;

export const StyledSummaryRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;

  ${media.xs} {
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }
`;

export const StyledSummaryValue = styled(StyledTypography)`
  text-align: right;
  overflow-wrap: anywhere;

  ${media.xs} {
    text-align: left;
  }
`;
