

export interface CardDeck {
	name: string;
	types: string[];
}

export interface Card {
	cardId: string;
	cardSet: string;
	dbfId: string;
	health: number;
	img: string;
	imgGold: string;
	locale: string;
	name: string;
	playerClass: string;
	rarity: string;
	type: string;
	text: string;
}