import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { LangProps } from "@/Utils";
import { Analytics } from "@vercel/analytics/react";

type RootLayoutProps = {
	children: React.ReactNode;
} & LangProps;

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
	title: "Gatizole",
	description: "Gatizole Cat Cafè Trento",
};

export default function RootLayout({
	children,
	params: { lang },
}: RootLayoutProps) {
	return (
		<html lang={lang}>
			<body className={roboto.className}>{children}</body>
			<Analytics />
		</html>
	);
}
