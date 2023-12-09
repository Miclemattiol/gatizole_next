import CatDescription from "@/Components/CatDescription";
import styles from "./Cats.module.scss";
import { LangProps, cats } from "@/Utils";
import { getDictionary } from "@/Dictionary";

type CatsProps = LangProps;

const Cats = ({ params: { lang } }: CatsProps) => {
	const dict = getDictionary(lang).cats;

	return (
		<div className={styles.Cats}>
			{cats.map((cat, index) => (
				<CatDescription
					key={index}
					className={styles.CatDescription}
					image={cat.image}
					name={cat.name}
					description={dict[cat.index].description}
				/>
			))}
		</div>
	);
};

export default Cats;
