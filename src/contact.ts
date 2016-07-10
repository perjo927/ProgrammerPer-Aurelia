import { CardList } from "./card-list";

export interface IAddress {
    mail: string;
    phone: string;
    web: string;
}

export class Contact {
    address: IAddress;
    presence: CardList;
}