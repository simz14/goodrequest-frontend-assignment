"use client";

import styled, { css } from "styled-components";

const resultsGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledResults = styled.div`
  padding-block: 32px;
  border-top: 1px solid var(--app-content-quintarny);
  border-bottom: 1px solid var(--app-content-quintarny);
`;

export const StyledResultsList = styled.dl`
  ${resultsGrid}
  margin: 0;
`;

export const StyledResultsSkeletons = styled.div`
  ${resultsGrid}
`;

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

export const StyledResultsMessage = styled.div`
  text-align: center;
`;
