import { Dict } from ".";

const it: Dict = {
	menu: {
		home: "Home",
		about: "Chi siamo",
		cats: "I nostri gatti",
		rules: "Le nostre regole",
		menu: "Menu",
		faq: "FAQ",
		contacts: "Contatti",
	},
	buttons: {
		book: "Prenota ora",
	},
	home: {
		intro: "Il primo Cat Cafè del Trentino Alto Adige",
		description:
			"Non un caffè al banco veloce, ma un luogo dove prendersi del tempo per se, concedersi un momento particolare e perché no... anche qualche sfizio goloso.",
		rules: "Leggi le regole per migliorare la tua e la loro esperienza da noi! ",
	},
	cats: {
		title: "I nostri gatti",
		likes: "Mi piace: ",
		dislikes: "Non mi piace: ",
		catsList: {
			Nina: {
				description:
					"Sono una piccola gatta peperina e l’ultima entrata nella squadra Gatizole. Sono stata trovata sulla strada vicino a Roma insieme alla mia sorellina e dopo un lungo viaggio sono arrivata qui. Nonostante il mio passato, amo tutti gli esseri umani e sono molto energica. Tendo a mordicchiare le mani, ma magari potrete aiutarmi a smettere con questo vizio giocando con me solo con i giochi a disposizione!",
				likes: "saltare, correre e giocare, esplorare ciò che mi circonda",
				dislikes:
					"essere spostata senza il mio consenso, chi non mi fa le coccole.",
			},
			Gianni: {
				description:
					"Sono un pacioccone. La mia mamma è umana perché quando sono nato ero talmente piccolo che mi hanno dovuto allattare con il biberon. Sono davvero un gran tenerone e il mio nome d’arte è Gianni Civetta. Sono il fratello di Alcide e quindi spesso facciamo la lotta ma per gioco. Basta una coccola che faccio partire il motorino delle fusa! ",
				likes: "dormire spaparanzato, giocare con qualsiasi cosa, farmi coccolare",
				dislikes: "non pervenuto",
			},
			Alcide: {
				description:
					"Sono energico e giocherellone ma anche un gran coccolone. Sono un grande esploratore e adoro guardare il mondo dall’alto, anche quando dormo sono sempre pronto al gioco! Il mio pelo è morbido e folto. Tutti qui mi dicono che diventerò proprio un bel gattone! ",
				likes: "esplorare i posti più nascosti, giocare e arrampicarmi",
				dislikes: "chi mi costringe a fare quello che non voglio!",
			},
			Suzanne: {
				description:
					"Sono un po’ timida e schiva, ma basta un grattino nel punto giusto che mi sciolgo. Sono un Munchkin e quindi ho le zampette corte, ma non lasciatevi ingannare: sono agile e svelta come qualsiasi felino! Amo la tranquillità e voglio che i miei spazi vengano rispettati, ma sono anche una gran giocherellona… Se vuoi conquistarmi, basta che giochiamo con un nastro o un filo!",
				likes: "giocare con fili e palline, rilassarmi nella mia cuccia",
				dislikes:
					"essere presa in giro per la mia statura, chi non rispetta i miei spazi",
			},
		},
	},
	contacts: {
		title: "Contatti",
		contactUs: "Come contattarci",
		whereAreWe: "Dove siamo",
	},
	footer: {
		title: "Contattaci",
		telephone: "Telefono",
		address: "Indirizzo",
		social: "Vieni a conoscerci sui nostri social",
	},
	todo: {
		title: "La pagina richiesta non è ancora stata creata",
	},
	wip: {
		title: "La pagina richiesta è in lavorazione, pertanto non è ancora completa",
	},
	e404: {
		title: "La pagina richiesta non esiste",
	},
};

export default it;
