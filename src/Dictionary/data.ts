import { Alcide, Gianni, Nina, Suzanne } from "@/Images";
import { Data } from ".";
import { En, It } from "@/Icons";

const data: Data = {
	phoneNumber: "+39 0461 083540",
	address: "Via del Travai, 15, 38122 Trento",
	addressLink: "https://maps.app.goo.gl/CEf1yBiuWTmNcaxdA",
	locales: {
		en: { icon: En },
		it: { icon: It },
	},
	defaultLocale: "it",
	cats: [
		{
			name: "Nina",
			image: Nina,
		},
		{
			name: "Alcide",
			image: Alcide,
		},
		{
			name: "Gianni",
			image: Gianni,
		},
		{
			name: "Suzanne",
			image: Suzanne,
		},
	],
};

export default data;
