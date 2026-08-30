"use client";

import styled from "styled-components";

export const StyledLanguageSwitcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border-radius: 999px;
  background-color: var(--app-action-secondary);
`;

export const StyledLanguageButton = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border: none;
  border-radius: 999px;
  background-color: ${({ $active }) =>
    $active ? "var(--app-action-primary)" : "transparent"};
  color: ${({ $active }) =>
    $active
      ? "var(--app-inverse-content-primary)"
      : "var(--app-content-secondary)"};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  transition:
    background-color 150ms ease,
    color 150ms ease;

  &:hover:not([aria-pressed="true"]) {
    background-color: var(--mantine-color-gray-2);
    color: var(--app-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--app-action-primary);
    outline-offset: 2px;
  }
`;
