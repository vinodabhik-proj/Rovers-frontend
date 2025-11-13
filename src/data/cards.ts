import type { CardItem } from "../models";
import TGPhoto from "../images/players/TG.jpeg";
import RMPhoto from "../images/players/RM.jpeg";
import JTPhoto from "../images/players/JT.png";
import JRPhoto from "../images/players/JR.jpeg";
import LMPhoto from "../images/players/LM.jpeg";
import HBPhoto from "../images/players/HB.jpeg";

export const cards: CardItem[] = [
	{
		id: 0,
		image: TGPhoto,
		position: "CM",
		description: "Chairman"
	},
	{
		id: 1,
		image: JTPhoto,
		position: "CM",
		description: "El Capitan"
	},
	{
		id: 2,
		image: RMPhoto,
		position: "CB",
		description: "Social Sec"
	},
	{
		id: 3,
		image: JRPhoto,
		position: "ST",
		description: "Media Sec Emeritus"
	},
	{
		id: 4,
		image: LMPhoto,
		position: "CB/RB",
		description: "Social Sec Emeritus"
	},
	{
		id: 5,
		image: HBPhoto,
		position: "GK",
		description: "Chairman Emeritus"
	}
];