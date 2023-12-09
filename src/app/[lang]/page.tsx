import styles from "./page.module.scss";
import Header from "@/Components/Header";
import { getDictionary } from "@/Dictionary";
import { LangProps } from "@/Utils";
import classNames from "classnames";
import Image from "next/image";
import { BookingButton } from "@/Components/Buttons/BookingButton";
import { Roboto } from "next/font/google";
import Footprint from "@/Components/Footprint";
import { cats, rules } from "@/Images";
import Link from "next/link";

type PageProps = LangProps;

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home({ params }: PageProps) {
	const dict = getDictionary(params.lang).home;

	return (
		<main className={styles.main}>
			<Header
				params={params}
				background={false}
				className={classNames(styles.header)}
			/>
			<div className={styles.intro}>
				<span className={styles.title}>{dict.intro}</span>
				<BookingButton params={params} />
			</div>
			<div className={styles.description}>
				<div className={styles.container}>
					<Footprint className={styles.footprint1} />
					<Footprint className={styles.footprint2} />
					<span className={roboto.className}>{dict.description}</span>
				</div>
			</div>
			<div className={styles.cats}>
				<Footprint className={styles.footprint1} />
				<Footprint className={styles.footprint2} />
				<div className={styles.catCarousel}>
					{cats.map((cat, index) => (
						<Image
							key={index}
							src={cat}
							alt=""
							className={styles.catImage}
						/>
					))}
				</div>
			</div>
			<div className={styles.rules}>
				<span>{dict.rules}</span>
				<Link href={`/${params.lang}/rules`}>
					<Image
						src={rules}
						alt="rules"
						className={styles.rulesImage}
					/>
				</Link>
			</div>
		</main>
	);
}
