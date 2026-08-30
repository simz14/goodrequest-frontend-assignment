"use client";

import styled, { css } from "styled-components";

const TYPOGRAPHY_VARIANTS = {
  "heading-xl": {
    fontSize: "60px",
    lineHeight: "68px",
    fontWeight: 700
  },
  "heading-lg": {
    fontSize: "48px",
    lineHeight: "56px",
    fontWeight: 700
  },
  "text-md": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400
  },
  "text-md-semibold": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600
  }
};

type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANTS;

const TYPOGRAPHY_COLORS = {
  primary: "var(--app-content-primary)",
  secondary: "var(--app-content-secondary)",
  brand: "var(--app-action-primary)"
};

type TypographyColor = keyof typeof TYPOGRAPHY_COLORS;

export const StyledTypography = styled.p<{
  $variant: TypographyVariant;
  $color: TypographyColor;
}>`
  margin: 0;
  color: ${({ $color }) => TYPOGRAPHY_COLORS[$color]};
  ${({ $variant }) => {
    const { fontSize, lineHeight, fontWeight } = TYPOGRAPHY_VARIANTS[$variant];
    return css`
      font-size: ${fontSize};
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
    `;
  }}
`;
