import Image, { StaticImageData } from "next/image";
import styles from "./CatDescription.module.scss";
import { cats } from "@/Images";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import { LangProps } from "@/Utils";

const roboto700 = Roboto({ weight: "700", subsets: ["latin"] });
const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });

type CatDescriptionProps = {
	className?: string;
	image: StaticImageData;
	name: string;
	description: string;
};

const CatDescription = ({
	className,
	description,
	image,
	name,
}: CatDescriptionProps) => {
	return (
		<div className={classNames(styles.CatDescription, className)}>
			<div className={styles.catDisplay}>
				<Image src={image} alt="catImage" className={styles.image} />
				<div className={styles.nameContainer}>
					<span className={roboto700.className}>{name}</span>
				</div>
			</div>
			<span
				className={classNames(styles.description, roboto400.className)}
			>
				{description}
			</span>
			<span>
				
			</span>
		</div>
	);
};

export default CatDescription;
