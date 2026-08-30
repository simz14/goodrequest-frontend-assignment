"use client";

import styled from "styled-components";

const FORM_COLUMN_MAX_WIDTH = "658px";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "form image"
    "footer image";
  gap: 24px;
  flex: 1;
  min-height: 0;
  padding-block: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 240px auto;
    grid-template-areas:
      "form"
      "image"
      "footer";
  }
`;

export const FormPanel = styled.section`
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  min-width: 0;
  max-width: ${FORM_COLUMN_MAX_WIDTH};
  margin: 0 auto;
  width: 100%;
`;

export const FooterPanel = styled.div`
  grid-area: footer;
  width: 100%;
  max-width: ${FORM_COLUMN_MAX_WIDTH};
  margin: 0 auto;
`;

export const ImagePanel = styled.aside`
  grid-area: image;
  position: relative;
  overflow: hidden;
  min-height: 0;
  border-radius: var(--mantine-radius-lg, 16px);
`;
