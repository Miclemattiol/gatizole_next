import { Roboto } from "next/font/google";
import styles from "./Social.module.scss";
import classNames from "classnames";
import { Facebook, Instagram } from "@/Icons";
import { LangProps } from "@/Utils";
import { getDictionary } from "@/Dictionary";
import Link from "next/link";

type InfoBoxProps = {
	className?: string;
} & LangProps;

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Social = ({ className, params: { lang } }: InfoBoxProps) => {
	const dict = getDictionary(lang).footer;

	return (
		<div className={classNames(styles.Social, className)}>
			<span className={classNames(styles.name, roboto.className)}>
				{dict.social}
			</span>
			<div className={classNames(styles.content, roboto.className)}>
				<Link href="http://www.instagram.com/gatizolecatcafe">
					<Instagram />
				</Link>
				<Link href="http://www.facebook.com/gatizolecatcafe">
					<Facebook />
				</Link>
			</div>
		</div>
	);
};

export default Social;
