import { LangProps } from "@/Utils";
import styles from "./wip.module.scss";
import Image from "next/image";
import { wip } from "@/Images";
import { getDictionary } from "@/Dictionary";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	const dict = getDictionary(lang).wip;
	return (
		<main className={styles.wipContainer}>
			<span className={styles.wipMessage}>{dict.title}</span>
			<Image src={wip} alt="wip" className={styles.wipImage} />
		</main>
	);
}
