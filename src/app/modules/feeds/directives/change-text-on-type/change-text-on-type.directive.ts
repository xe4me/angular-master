import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
    selector: '[changeTextOnType]',
    exportAs:'chDirective'
})
export class ChangeTextOnTypeDirective {


    constructor(public elementRef: ElementRef) {
    }

    public updateText(text) {

        this.elementRef.nativeElement.innerText =text;
    }
}
