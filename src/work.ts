import {autoinject} from "aurelia-framework";

@autoinject
export class Work {
    bajs = "bajs";
    constructor(private element: HTMLDivElement) {
        console.log("WORK", this.element);
        // this.element.style.backgroundColor = 'red';
        // this.element.scrollIntoView(false);
    }
}