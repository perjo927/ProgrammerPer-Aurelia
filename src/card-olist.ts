import { CardInverse } from "./card-inverse";

export interface ICardOList {
    [n: number]: CardInverse;
}

export class CardOList implements ICardOList {
    [n: number]: CardInverse;
}