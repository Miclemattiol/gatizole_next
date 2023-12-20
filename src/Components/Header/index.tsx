"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import { logo } from "@/Images";
import classNames from "classnames";
import { MenuButton } from "../Menu";
import { LangProps, lockScroll } from "@/Utils";
import { It } from "@/Icons";
import LanguageSwitcher from "../LanguageSwitcher";
import Link from "next/link";

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
			<Link
				href={`/${params.lang}`}
				className={styles.logoContainer}
				onClick={() => lockScroll(false)}
			>
				<Image
					src={logo}
					alt={"logo"}
					priority={true}
					className={classNames(styles.logo)}
				/>
			</Link>
			<LanguageSwitcher
				params={params}
				className={styles.languageSwitcher}
			/>
		</div>
	);
};

export default Header;
