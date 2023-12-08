"use client";

import styles from "./Menu.module.scss";
import { Menu as MenuIcon, Close } from "@/Icons";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { LangProps } from "@/Utils";
import { getDictionary } from "@/Dictionary";
import { Inter } from "next/font/google";
import { BookingButton } from "../Buttons/BookingButton";

type MenuProps = {
	className?: string;
	open: boolean;
} & LangProps;

const inter = Inter({ subsets: ["latin"] });

export const Menu = ({ className, open, params: { lang } }: MenuProps) => {
	const menu = getDictionary(lang).menu;
	const menuLinks = [
		{
			name: menu.home,
			href: "/",
		},
		{
			name: menu.about,
			href: "/about",
		},
		{
			name: menu.cats,
			href: "/cats",
		},
		{
			name: menu.rules,
			href: "/rules",
		},
		{
			name: menu.menu,
			href: "/menu",
		},
		{
			name: menu.faq,
			href: "/faq",
		},
		{
			name: menu.contacts,
			href: "/contacts",
		},
	];

	const menuContentClass = styles.menuContent;

	useEffect(() => {
		const showLinks = async (open: boolean) => {
			const links = document.querySelectorAll(`.${menuContentClass}`);
			if (open) {
				for (const link of Array.from(links.values())) {
					link.classList.add(styles.visible);
					await new Promise((resolve) => setTimeout(resolve, 50));
				}
			} else {
				for (const link of Array.from(links.values())) {
					link.classList.remove(styles.visible);
				}
			}
		};

		showLinks(open);
	}, [open, menuContentClass]);

	return (
		<div
			className={classNames(
				styles.Menu,
				className,
				open && styles.opened
			)}
		>
			<div className={styles.spacer} />
			<div className={styles.linksContainer}>
				{menuLinks.map(({ name, href }) => (
					<a
						key={name}
						href={href}
						className={classNames(
							styles.link,
							"menu-text",
							inter.className,
							menuContentClass
						)}
					>
						{name}
					</a>
				))}
				<BookingButton
					params={{ lang }}
					className={classNames(menuContentClass)}
				/>
			</div>
		</div>
	);
};

type MenuButtonProps = {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
} & LangProps;

export const MenuButton = ({ className, onClick, params }: MenuButtonProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div
				className={classNames(styles.MenuButton, className)}
				onClick={(event) => {
					onClick?.(event);
					setOpen((prev) => !prev);
					document.getElementsByTagName("body")[0].style.overflow =
						open ? "auto" : "hidden";
				}}
				// style={open ? { position: "fixed" } : undefined}
			>
				<MenuIcon
					className={classNames(styles.icon, !open && styles.visible)}
				/>
				<Close
					className={classNames(styles.icon, open && styles.visible)}
				/>
			</div>
			<Menu params={params} open={open} />
		</>
	);
};
