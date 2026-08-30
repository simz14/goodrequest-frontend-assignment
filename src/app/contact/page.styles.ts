"use client";

import styled, { css } from "styled-components";

const CONTENT_MAX_WIDTH = "1120px";
const CONTENT_INSET = "80px";
const IMAGE_MIN_HEIGHT = "200px";

const contentStack = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const ContactContent = styled.article`
  ${contentStack}
  flex: 1;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin-inline: auto;
  padding-block: 40px;

  @media (max-width: 768px) {
    padding-block: 24px;
  }
`;

export const ContactHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ContactInset = styled.div`
  ${contentStack}
  margin-inline: ${CONTENT_INSET};

  @media (max-width: 1024px) {
    margin-inline: 40px;
  }

  @media (max-width: 768px) {
    margin-inline: 0;
  }
`;

export const ContactImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1120 / 376;
  min-height: ${IMAGE_MIN_HEIGHT};
  overflow: hidden;
  border-radius: var(--mantine-radius-lg, 16px);
`;

export const ContactFooter = styled.div`
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin-inline: auto;
`;
