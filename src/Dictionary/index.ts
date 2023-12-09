import { Locale } from "@/Utils";
import dict from "./it.json";
import data from "./data.json";

export const getDictionary = (locale: Locale) => {
	return require(`./${locale}.json`) as typeof dict;
};

export const getData = () => {
	return data;
};

declare global {
	interface String {
		toHtml(): string;
	}
}

String.prototype.toHtml = function () {
	return this.replace(/\n/g, "<br>");
};
