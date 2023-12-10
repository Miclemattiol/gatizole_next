"use client";	

import { LangProps } from "@/Utils";
import styles from "./wip.module.scss";
import { getDictionary } from "@/Dictionary";
import { Close } from "@/Icons";
import { useState } from "react";
import classNames from "classnames";

type LayoutProps = {
	children: React.ReactNode;
} & LangProps;

export default function Layout({ children, params: { lang } }: LayoutProps) {
	const dict = getDictionary(lang).wip;
	const [closed, setClosed] = useState(false);
	return (
		<>
			{children}
			<main
				className={classNames(
					styles.wipContainer,
					closed && styles.closed
				)}
			>
				<span className={styles.wipMessage}>{dict.title}</span>
				<Close
					className={styles.close}
					onClick={() => {
						setClosed(true);
					}}
				/>
			</main>
		</>
	);
}
