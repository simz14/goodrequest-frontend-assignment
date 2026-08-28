"use client";
import styled from "styled-components";

export const StyledFormPhoneInput = styled.div`
  width: 100%;
  grid-column: 1 / -1;

  .fields-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .flag {
    width: 20px;
    height: 20px;
    flex: none;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      height: 20px;
      flex: none;
      display: block;
    }
  }

  .mantine-Combobox-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
  }

  .dial-code {
    font-size: 14px;
    line-height: 20px;
    color: var(--app-content-primary);
  }

  .country-select .mantine-InputBase-input {
    width: auto;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 18px;
  }

  .mantine-TextInput-root {
    width: 100%;

    input {
      padding-left: 60px;
    }

    .mantine-TextInput-section {
      margin-left: 16px;
    }
  }
`;
