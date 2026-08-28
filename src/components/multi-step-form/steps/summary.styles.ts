"use client";

import styled from "styled-components";

import { StyledTypography } from "@/components/ui/typography.styles";

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const StyledSummaryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }
`;

export const StyledSummaryValue = styled(StyledTypography)`
  text-align: right;
  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    text-align: left;
  }
`;
