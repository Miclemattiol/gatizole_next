import { LangProps } from "@/Utils";
import styles from "./wip.module.scss";
import Image from "next/image";
import { wip } from "@/Images";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	return (
		<main className={styles.wipContainer}>
			<span className={styles.wipMessage}>
				La pagina richiesta è in lavorazione
			</span>
			<Image src={wip} alt="wip" className={styles.wipImage} />
		</main>
	);
}
