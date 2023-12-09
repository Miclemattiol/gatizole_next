import classNames from "classnames";
import styles from "./Title.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type TitleProps = {
	children: React.ReactNode;
	className?: string;
};

const Title = ({ children, className }: TitleProps) => {
	return (
		<span className={classNames(styles.Title, inter.className, className)}>
			{children}
		</span>
	);
};

export default Title;
