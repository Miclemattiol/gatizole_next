"use client";

import { LangProps } from "@/Utils";
import styles from "./BookingButton.module.scss";
import { getDictionary } from "@/Dictionary";
import classNames from "classnames";
import { Inter } from "next/font/google";

type BookingButtonProps = React.HTMLAttributes<HTMLButtonElement> & LangProps;

const inter = Inter({ subsets: ["latin"] });

export const BookingButton = ({
	className,
	params: { lang },
}: BookingButtonProps) => {
	const buttonString = getDictionary(lang).buttons.book;

	return (
		<button
			className={classNames(
				styles.BookingButton,
				className,
				inter.className
			)}
			onClick={() => {
				window.open("https://gatizole.plateform.app/");
			}}
		>
			{buttonString}
		</button>
	);
};
