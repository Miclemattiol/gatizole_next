import Image, { StaticImageData } from "next/image";
import styles from "./CatDescription.module.scss";
import { cats } from "@/Images";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import { LangProps } from "@/Utils";
import { getDictionary } from "@/Dictionary";

const roboto700 = Roboto({ weight: "700", subsets: ["latin"] });
const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });

type CatDescriptionProps = {
	className?: string;
	id?: string;
	image: StaticImageData;
	name: string;
	description: string;
	likes: string;
	dislikes: string;
} & LangProps;

const CatDescription = ({
	className,
	id,
	description,
	image,
	name,
	likes,
	dislikes,
	params: { lang },
}: CatDescriptionProps) => {
	const dict = getDictionary(lang).cats;

	return (
		<div className={classNames(styles.CatDescription, className)} id={id}>
			<div className={styles.catDisplay}>
				<Image src={image} alt="catImage" className={styles.image} />
				<div className={styles.nameContainer}>
					<span className={roboto700.className}>{name}</span>
				</div>
			</div>
			<div className={styles.info}>
				<span
					className={classNames(
						styles.description,
						roboto400.className
					)}
				>
					{description}
				</span>
				<span className={classNames(styles.likes, roboto400.className)}>
					<span className={styles.title}>{dict.likes}</span>
					{likes}
				</span>
				<span
					className={classNames(styles.dislikes, roboto400.className)}
				>
					<span className={styles.title}>{dict.dislikes}</span>
					{dislikes}
				</span>
			</div>
		</div>
	);
};

export default CatDescription;
