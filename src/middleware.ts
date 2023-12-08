import { NextMiddleware } from "next/server";
import { locale, locales, defaultLocale } from "./Utils";

const hasLocale = (url: string) => {
	return locales.some((l) => url.startsWith(`/${l}`));
};

export const middleware: NextMiddleware = (req) => {
	if (hasLocale(req.nextUrl.pathname)) {
		return;
	}
	const acceptedLocale = req.headers.get("accept-language");

	const locale: locale =
		(acceptedLocale
			?.split(/,|;/)
			.filter((l) => locales.includes(l as locale))[0] as locale) ??
		defaultLocale;

	req.nextUrl.pathname = req.nextUrl.pathname.replace("/", `/${locale}/`);

	return Response.redirect(req.nextUrl);
};

export const config = {
	matcher: "/((?!api|_next/static|_next/image|favicon.ico|assets/images).*)",
};
