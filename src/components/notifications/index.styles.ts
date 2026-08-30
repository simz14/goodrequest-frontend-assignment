"use client";

import { Notifications } from "@mantine/notifications";
import styled from "styled-components";

export const StyledNotifications = styled(Notifications)`
  .mantine-Notification-root {
    align-items: flex-start;
    padding: 16px;
    border-radius: 12px;
    border-inline-start: 4px solid var(--notification-color);
    background-color: var(--app-surface-primary);
    box-shadow: 0 12px 32px rgb(17 24 39 / 12%);
  }

  .mantine-Notification-icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    margin-inline-end: 12px;
    color: var(--app-inverse-content-primary);
  }

  .mantine-Notification-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--app-content-primary);
  }

  .mantine-Notification-description {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--app-content-secondary);
  }
`;
