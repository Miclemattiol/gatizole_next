import { getData, getDictionary } from "@/Dictionary";
import InfoBox from "../InfoBox";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import { LangProps } from "@/Utils";

type FooterProps = React.HTMLAttributes<HTMLDivElement> & LangProps;

const Footer = (props: FooterProps) => {
	const data = getData();
	const dict = getDictionary(props.params.lang).footer;

	return (
		<div {...props} className={classNames(props.className, styles.Footer)}>
			<span className={styles.title}>{dict.title}</span>
			<InfoBox name={dict.telephone}>
				<a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
			</InfoBox>
			<InfoBox name={dict.address}>
				<a href={`${data.addressLink}`}>{data.address}</a>
			</InfoBox>
		</div>
	);
};
// https://maps.app.goo.gl/CEf1yBiuWTmNcaxdA
export default Footer;
