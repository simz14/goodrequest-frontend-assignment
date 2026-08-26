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
`;

export const ImagePanel = styled.aside`
  position: relative;
  overflow: hidden;
  min-height: 0;
  border-radius: var(--mantine-radius-lg, 16px);
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: crimson;
`;
