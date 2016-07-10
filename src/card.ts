export interface ICard {
    image: string;
    title: string;
    subtitle: string;
    textlist: Array<string>;
}

export class Card implements ICard {
    image: string;
    title: string;
    subtitle: string;
    textlist: Array<string>;
}