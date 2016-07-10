import { ICard } from "./card";

export class CardInverse implements ICard {
    image: string;
    title: string;
    subtitle: string;
    textlist: Array<string>;
    link: string;
}