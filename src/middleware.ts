import { NextMiddleware } from "next/server";
import { locale } from "./Utils";
import { data } from "./Dictionary";

const { locales, defaultLocale } = data;

const hasLocale = (url: string) => {
	return new RegExp(`\\/(${Object.keys(locales).join("|")})($|\\/.*)`).test(
		url
	);
};

export const middleware: NextMiddleware = (req) => {
	if (hasLocale(req.nextUrl.pathname)) {
		return;
	}
	const acceptedLocale = req.headers.get("accept-language");

	const locale: locale =
		(acceptedLocale
			?.split(/,|;/)
			.filter((l) =>
				Object.keys(locales).includes(l as locale)
			)[0] as locale) ?? defaultLocale;

	req.nextUrl.pathname = req.nextUrl.pathname.replace("/", `/${locale}/`);

	return Response.redirect(req.nextUrl);
};

export const config = {
	matcher: "/((?!api|_next/static|_next/image|favicon.ico|assets/images).*)",
};
