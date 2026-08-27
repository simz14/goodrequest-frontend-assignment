"use client";

import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  gap: 24px;
  flex: 1;
  min-height: 0;
  padding: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 240px;
  }
`;

export const FormPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  min-width: 0;
  max-width: 658px;
  margin: 0 auto;
  width: 100%;
`;

export const ImagePanel = styled.aside`
  position: relative;
  overflow: hidden;
  min-height: 0;
  border-radius: var(--mantine-radius-lg, 16px);
`;
