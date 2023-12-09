import { SvgProps } from ".";

const It = (props: SvgProps) => {
	return (
		<svg
			{...props}
			height="800px"
			width="800px"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<circle fill="#F0F0F0" cx="256" cy="256" r="256" />
			<path
				fill="#D80027"
				d="M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"
			/>
			<path
				fill="#6DA544"
				d="M0,256c0,110.071,69.472,203.906,166.957,240.077V15.923C69.472,52.094,0,145.929,0,256z"
			/>
		</svg>
	);
};

export default It;
