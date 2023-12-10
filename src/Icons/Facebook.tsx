import { SvgProps } from ".";

const Facebook = (props: SvgProps) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_389_150)">
				<path
					d="M9.14533 24V12.7385H6.16756V8.68382H9.14533V5.2206C9.14533 2.49917 10.9043 0 14.9574 0C16.5984 0 17.8119 0.15732 17.8119 0.15732L17.7163 3.9437C17.7163 3.9437 16.4787 3.93166 15.1283 3.93166C13.6667 3.93166 13.4325 4.60522 13.4325 5.72316V8.68382H17.8324L17.641 12.7385H13.4325V24H9.14533Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_389_150">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Facebook;
