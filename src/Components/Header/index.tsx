"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import { logo } from "@/Images";
import classNames from "classnames";
import { MenuButton } from "../Menu";
import { LangProps } from "@/Utils";

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
		</div>
	);
};

export default Header;
