import { SvgProps } from ".";

const Menu = (props: SvgProps) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 -960 960 960"
			width="24"
		>
			<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
		</svg>
	);
};

export default Menu;
