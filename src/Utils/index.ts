import { StaticImageData } from "next/image";

export type locale = "it" | "en";
export type LangProps = { params: { lang: locale } };

export interface Cat {
	image: StaticImageData;
	name: string;
}

export const lockScroll = (lock: boolean) => {
	document.getElementsByTagName("body")[0].style.overflow = lock
		? "hidden"
		: "auto";
};
