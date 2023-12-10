import Title from "@/Components/Title";
import styles from "./Contacts.module.scss";
import { LangProps } from "@/Utils";
import { getDictionary } from "@/Dictionary";

type ContactsProps = LangProps;

const Contacts = ({ params: { lang } }: LangProps) => {
	const dict = getDictionary(lang).contacts;

	return (
		<div className={styles.Contacts}>
			<Title>{dict.title}</Title>
		</div>
	);
};

export default Contacts;
