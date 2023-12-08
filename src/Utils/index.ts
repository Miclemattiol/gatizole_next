export type locale = "it" | "en";
export const locales = ["it", "en"];
export const defaultLocale: locale = "en";
export type LangProps = { params: { lang: locale } };
