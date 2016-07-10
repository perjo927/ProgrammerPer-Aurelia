import { CardList } from "./card-list";

export interface IPortfolio {
    projects: CardList;
    competitions: CardList;
}

export class Portfolio {
    projects: CardList;
    competitions: CardList;
}