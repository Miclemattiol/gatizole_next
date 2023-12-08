import Footer from "@/Components/Footer";
import { LangProps } from "@/Utils";
import { useContext } from "react";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	return (
		<>
			{children}
			<Footer params={{ lang }} />
		</>
	);
}
