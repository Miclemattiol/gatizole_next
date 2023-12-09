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
	index: number;
}

export const cats: Cat[] = [
	{
		name: "Nina",
		image: Nina,
		index: 0,
	},
	{
		name: "Alcide",
		image: Alcide,
		index: 1,
	},
	{
		name: "Gianni",
		image: Gianni,
		index: 2,
	},
	{
		name: "Suzanne",
		image: Suzanne,
		index: 3,
	},
];
