"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import { logo } from "@/Images";
import classNames from "classnames";
import { MenuButton } from "../Menu";
import { LangProps } from "@/Utils";
import { It } from "@/Icons";
import LanguageSwitcher from "../LanguageSwitcher";

type HeaderProps = {
	background?: boolean;
} & LangProps &
	React.HTMLAttributes<HTMLDivElement>;

const Header = ({ background = true, params, className }: HeaderProps) => {
	return (
		<div
			className={classNames(styles.Header, className)}
			style={background ? undefined : { backgroundColor: "transparent" }}
		>
			<MenuButton
				className={classNames(styles.menuButton)}
				params={params}
			/>
			<Image
				src={logo}
				alt={"logo"}
				priority={true}
				className={classNames(styles.logo)}
			/>
			<LanguageSwitcher params={params} className={styles.languageSwitcher} />
		</div>
	);
};

export default Header;
