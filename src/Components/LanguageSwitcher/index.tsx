import styles from "./LanguageSwitcher.module.scss";
import { LangProps, getLocaleIcon } from "@/Utils";
import classNames from "classnames";
import { locales, locale } from "@/Utils";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "@/Hooks/useOutsideAlterer";

type LanguageSwitcherProps = React.HTMLAttributes<HTMLDivElement> & LangProps;

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const Icon = getLocaleIcon(props.params.lang);
	const menuRef = useRef<HTMLDivElement>(null);
	useOutsideAlerter(menuRef, () => {
		setMenuOpen(false);
	});

	const changeLocale = (locale: locale) => {
		if (props.params.lang != locale) {
			const newUrl = window.location.href.replace(
				`/${props.params.lang}`,
				`/${locale}`
			);
			window.location.href = newUrl;
		}
	};

	return (
		<div
			{...props}
			className={classNames(styles.LanguageSwitcher, props.className)}
		>
			<Icon
				className={styles.icon}
				onClick={() => {
					setMenuOpen(true);
				}}
			/>
			<div
				className={classNames(
					styles.languageMenu,
					menuOpen && styles.active
				)}
				ref={menuRef}
			>
				{/* return every locale icon and put the active one first*/}
				{locales
					.map((locale) => {
						const LocaleIcon = getLocaleIcon(locale);

						return (
							<a
								key={locale}
								lang={locale}
								className={classNames(
									styles.languageMenuItem,
									props.params.lang == locale && styles.active
								)}
								onClick={() => changeLocale(locale)}
							>
								<LocaleIcon className={styles.icon} />
							</a>
						);
					})
					.sort((a, b) => {
						if (a.key == props.params.lang) return -1;
						if (b.key == props.params.lang) return 1;
						return 0;
					})}
			</div>
		</div>
	);
};

export default LanguageSwitcher;
