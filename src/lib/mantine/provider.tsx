"use client";

import React from "react";
import { MantineProvider } from "@mantine/core";
import { cssVariablesResolver, theme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      {children}
    </MantineProvider>
  );
}
