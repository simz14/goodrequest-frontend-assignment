"use client";

import { useT } from "next-i18next/client";
import { StyledNotifications } from "./notifications.styles";

export default function Notifications() {
  const { t } = useT();

  return (
    <StyledNotifications
      position="bottom-right"
      autoClose={6000}
      containerWidth={380}
      aria-live="polite"
      aria-label={t("notifications.label")}
    />
  );
}
