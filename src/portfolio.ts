import { CardOList } from "./card-olist";

export interface IPortfolio {
    projects: CardOList;
    competitions: any;
}

export class Portfolio {
    projects: CardOList;
    competitions: any;
}