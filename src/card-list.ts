import { ICard } from "./card";

export interface ICardList {
    [n: number]: ICard;
}

export class CardList implements ICardList {
    [n: number]: ICard;
}