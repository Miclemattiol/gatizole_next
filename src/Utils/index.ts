import { En, It } from "@/Icons";
import { StaticImageData } from "next/image";
import Nina from "./catImages/Nina.jpg";
import Alcide from "./catImages/Alcide.jpg";
import Gianni from "./catImages/Gianni.jpg";
import Suzanne from "./catImages/Suzanne.jpg";

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

interface Cat {
	image: StaticImageData;
	name: string;
}

export const cats: Cat[] = [
	{
		name: "Nina",
		image: Nina,
	},
	{
		name: "Alcide",
		image: Alcide,
	},
	{
		name: "Gianni",
		image: Gianni,
	},
	{
		name: "Suzanne",
		image: Suzanne,
	},
];
