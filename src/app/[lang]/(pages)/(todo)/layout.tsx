import { LangProps } from "@/Utils";
import styles from "./todo.module.scss";
import Image from "next/image";
import { wip } from "@/Images";
import { getDictionary } from "@/Dictionary";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	const dict = getDictionary(lang).todo;
	return (
		<main className={styles.todoContainer}>
			<span className={styles.todoMessage}>{dict.title}</span>
			<Image src={wip} alt="wip" className={styles.todoImage} />
		</main>
	);
}
