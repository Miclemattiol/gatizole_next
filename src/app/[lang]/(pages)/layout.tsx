import Header from "@/Components/Header";
import { LangProps } from "@/Utils";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	return (
		<>
			<Header params={{ lang }} />
			<main
				style={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
				}}
			>
				{children}
			</main>
		</>
	);
}
