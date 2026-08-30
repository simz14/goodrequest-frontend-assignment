"use client";

import styled from "styled-components";

export const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding-block: 40px;
  text-align: center;
`;

export const StyledSuccessIcon = styled.div`
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background-color: var(--app-action-primary);
  color: var(--app-inverse-content-primary);
`;
