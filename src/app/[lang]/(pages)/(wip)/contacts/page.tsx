import Title from "@/Components/Title";
import styles from "./Contacts.module.scss";
import { LangProps } from "@/Utils";
import { data, getDictionary } from "@/Dictionary";
import { Roboto } from "next/font/google";

const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });
const roboto700 = Roboto({ weight: "700", subsets: ["latin"] });

type ContactsProps = LangProps;

const Contacts = ({ params: { lang } }: ContactsProps) => {
	const dict = getDictionary(lang).contacts;

	return (
		<div className={styles.Contacts}>
			<Title className={styles.title}>{dict.title}</Title>
			<div className={styles.infoContainer}>
				<div className={styles.contactsContainer}>
					<span className={roboto700.className}>
						{dict.contactUs}
					</span>
					<span className={roboto700.className}>
						Tel.{" "}
						<a
							href={`tel:${data.phoneNumber}`}
							className={roboto400.className}
						>
							{data.phoneNumber}
						</a>
					</span>
					<span className={roboto700.className}>
						Email{" "}
						<a
							href={`mailto:${data.email}`}
							className={roboto400.className}
						>
							{data.email}
						</a>
					</span>
				</div>
				<div className={styles.contactsContainer}>
					<span className={roboto700.className}>
						{dict.whereAreWe}
					</span>
					<span className={roboto400.className}>
						{data.address.addressLine1}
					</span>
					<span className={roboto400.className}>
						{data.address.addressLine2}
					</span>
				</div>
				{/* Mappa */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3181477774206!2d11.1210487!3d46.0646971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714c975eb9b9%3A0xdb2ae02008ae3aa6!2sVia%20del%20Travai%2C%2015%2C%2038122%20Trento%20TN!5e0!3m2!1sit!2sit!4v1702201800590!5m2!1sit!2sit"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className={styles.map}
				/>
			</div>
		</div>
	);
};

export default Contacts;
