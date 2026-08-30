"use client";

import { notifications } from "@mantine/notifications";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { useCallback } from "react";

export type NotificationVariant = "success" | "error";

export type Notification = {
  variant: NotificationVariant;
  title: string;
  description?: string;
};

const VARIANT_COLORS: Record<NotificationVariant, string> = {
  success: "var(--app-action-primary)",
  error: "var(--mantine-color-error)"
};

const VARIANT_ICONS: Record<NotificationVariant, React.ReactNode> = {
  success: <IconCheck size={16} />,
  error: <IconAlertTriangle size={16} />
};

export const useNotify = () => {
  const { t } = useT();

  return useCallback(
    ({ variant, title, description }: Notification) =>
      notifications.show({
        color: VARIANT_COLORS[variant],
        icon: VARIANT_ICONS[variant],
        role: variant === "error" ? "alert" : undefined,
        closeButtonProps: { "aria-label": t("notifications.dismiss") },
        ...(description ? { title, message: description } : { message: title })
      }),
    [t]
  );
};
