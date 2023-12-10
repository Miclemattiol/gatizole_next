import { Roboto } from "next/font/google";
import styles from "./InfoBox.module.scss";
import classNames from "classnames";

type InfoBoxProps = {
	className?: string;
	name: string;
	children: React.ReactNode;
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const InfoBox = ({ className, name, children }: InfoBoxProps) => {
	return (
		<div className={classNames(styles.InfoBox, className)}>
			<span className={classNames(styles.name, roboto.className)}>
				{name}
			</span>
			<div className={classNames(styles.content, roboto.className)}>
				{children}
			</div>
		</div>
	);
};

export default InfoBox;
