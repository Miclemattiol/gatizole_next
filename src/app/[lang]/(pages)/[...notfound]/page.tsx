import { Roboto } from "next/font/google";
import styles from "./Notfound.module.scss";
import classNames from "classnames";
import { LangProps } from "@/Utils";
import { getDictionary } from "@/Dictionary";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

type NotFoundProps = LangProps;

const Notfound = ({ params: { lang } }: NotFoundProps) => {
	const dict = getDictionary(lang).e404;

	return (
		<div className={styles.Notfound}>
			<span className={classNames(styles.num404, roboto.className)}>
				404
			</span>
			<span className={styles.err404}>{dict.title}</span>
		</div>
	);
};

export default Notfound;
