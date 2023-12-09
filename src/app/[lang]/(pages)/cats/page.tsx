import CatDescription from "@/Components/CatDescription";
import styles from "./Cats.module.scss";
import { LangProps, cats } from "@/Utils";
import { getDictionary } from "@/Dictionary";
import Title from "@/Components/Title";

type CatsProps = LangProps;

const Cats = ({ params: { lang } }: CatsProps) => {
	const dict = getDictionary(lang).cats;

	return (
		<div className={styles.Cats}>
			<Title className={styles.title}>{dict.title}</Title>

			{cats.map((cat, index) => {
				const catDict = dict.catsList.find((c) => c.name == cat.name);

				return (
					catDict && (
						<CatDescription
							key={index}
							className={styles.CatDescription}
							image={cat.image}
							name={cat.name}
							description={catDict!.description}
							params={{ lang }}
							likes={catDict!.likes}
							dislikes={catDict!.dislikes}
						/>
					)
				);
			})}
		</div>
	);
};

export default Cats;
