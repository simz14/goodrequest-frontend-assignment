"use client";

import styled from "styled-components";

const CONTENT_MAX_WIDTH = "1120px";

export const AboutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const AboutContent = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin-inline: auto;
  padding-block: 40px;

  @media (max-width: 768px) {
    gap: 24px;
    padding-block: 24px;
  }
`;

export const AboutHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AboutFooter = styled.div`
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin-inline: auto;
`;
