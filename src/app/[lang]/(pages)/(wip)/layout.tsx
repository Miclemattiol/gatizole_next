import { LangProps } from "@/Utils";
import styles from "./wip.module.scss";
import Image from "next/image";
import { wip } from "@/Images";
import { getDictionary } from "@/Dictionary";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	const dict = getDictionary(lang).todo;
	return (
		<>
			{children}
			<main className={styles.wipContainer}>
				<span className={styles.wipMessage}>{dict.title}</span>
			</main>
		</>
	);
}
