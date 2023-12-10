import { Cat, locale } from "@/Utils";
import data from "./data";
import it from "./it";
import en from "./en";
import { SvgProps } from "@/Icons";

export const getDictionary = (locale: locale) => {
	switch (locale) {
		case "it":
			return it;
		case "en":
			return en;
	}
};

export { data };

declare global {
	interface String {
		toHtml(): string;
	}
}

String.prototype.toHtml = function () {
	return this.replace(/\n/g, "<br>");
};

interface CatDict {
	description: string;
	likes: string;
	dislikes: string;
}

export interface Dict {
	menu: {
		home: string;
		about: string;
		cats: string;
		rules: string;
		menu: string;
		faq: string;
		contacts: string;
	};
	buttons: {
		book: string;
	};
	home: {
		intro: string;
		description: string;
		rules: string;
	};
	cats: {
		title: string;
		likes: string;
		dislikes: string;
		// catsList: Map<string, CatDict>;
		catsList: { [key: string]: CatDict };
	};
	contacts: {
		title: string;
		contactUs: string;
		whereAreWe: string;
	};
	footer: {
		title: string;
		telephone: string;
		address: string;
		social: string;
	};
	todo: {
		title: string;
	};
	wip: {
		title: string;
	};
	e404: {
		title: string;
	};
}

export interface Data {
	phoneNumber: string;
	email: string;
	address: {
		address: string;
		addressLink: string;
		addressLine1: string;
		addressLine2: string;
	};
	locales: {
		[key in locale]: { icon: (props: SvgProps) => React.JSX.Element };
	};
	defaultLocale: locale;
	cats: Cat[];
}
