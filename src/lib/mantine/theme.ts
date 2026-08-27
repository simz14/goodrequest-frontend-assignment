import {
  createTheme,
  type CSSVariablesResolver,
  type MantineColorsTuple
} from "@mantine/core";

const brand: MantineColorsTuple = [
  "#eef2ff",
  "#e0e7ff",
  "#c7d2fe",
  "#a5b4fc",
  "#818cf8",
  "#6366f1",
  "#4f46e5",
  "#4338ca",
  "#3730a3",
  "#312e81"
];

const gray: MantineColorsTuple = [
  "#f9fafb",
  "#f3f4f6",
  "#e5e7eb",
  "#d1d5db",
  "#9ca3af",
  "#6b7280",
  "#4b5563",
  "#374151",
  "#1f2937",
  "#111827"
];

const WHITE = "#ffffff";
const INVERSE_CONTENT_PRIMARY = "#fafafa";

const FONT_FAMILY = "var(--font-inter), Arial, Helvetica, sans-serif";

export const theme = createTheme({
  colors: { brand, gray },
  fontFamily: FONT_FAMILY,
  fontFamilyMonospace: FONT_FAMILY,
  headings: { fontFamily: FONT_FAMILY },
  primaryColor: "brand",
  primaryShade: { light: 6, dark: 5 },
  defaultRadius: "md"
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    "--app-content-primary": gray[9],
    "--app-content-secondary": gray[7],
    "--app-content-quaternary": gray[4],
    "--app-content-quintarny": gray[3],
    "--app-surface-primary": WHITE,
    "--app-surface-tertiary": gray[1],
    "--app-action-primary": brand[6],
    "--app-action-secondary": gray[1],
    "--app-inverse-content-primary": INVERSE_CONTENT_PRIMARY
  },
  light: {
    "--mantine-color-default-border": gray[3],
    "--mantine-color-disabled": gray[1],
    "--mantine-color-disabled-color": gray[3],
    "--mantine-color-disabled-border": gray[3]
  },
  dark: {}
});
