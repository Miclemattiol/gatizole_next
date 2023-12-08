import Image from "next/image";
import styles from "./Footprint.module.scss";
import classNames from "classnames";
import { footprint } from "@/Images";

type FootprintProps = React.HTMLAttributes<HTMLDivElement>;

const Footprint = (props: FootprintProps) => {
	return (
		<div
			{...props}
			className={classNames(styles.Footprint, props.className)}
		>
			<Image src={footprint} alt="" className={styles.image} />
		</div>
	);
};

export default Footprint;
