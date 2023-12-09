import { En, It } from "@/Icons";

export type locale = "it" | "en";
export const locales: locale[] = ["it", "en"];
export const defaultLocale: locale = "en";
export type LangProps = { params: { lang: locale } };

export const getLocaleIcon = (locale: locale) => {
	switch (locale) {
		case "it":
			return It;
		case "en":
			return En;
	}
};
