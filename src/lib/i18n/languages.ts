export const languages = ["en", "sk"] as const;

export type Language = (typeof languages)[number];
