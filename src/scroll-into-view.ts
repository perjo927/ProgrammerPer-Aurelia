import {autoinject} from "aurelia-framework";

@autoinject
export class ScrollIntoViewCustomAttribute {

    constructor(private element: HTMLElement) {
        this.element.scrollIntoView(false);
    }
}
