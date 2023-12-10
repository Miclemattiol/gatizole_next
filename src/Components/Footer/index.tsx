import { data, getDictionary } from "@/Dictionary";
import InfoBox from "../InfoBox";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import { LangProps } from "@/Utils";
import { Instagram } from "@/Icons";
import Social from "./Social";

type FooterProps = React.HTMLAttributes<HTMLDivElement> & LangProps;
//TODO Seguici sui nostri social
const Footer = (props: FooterProps) => {
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
			<Social params={props.params} />
		</div>
	);
};
// https://maps.app.goo.gl/CEf1yBiuWTmNcaxdA
export default Footer;
