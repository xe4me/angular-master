import {Component, OnInit, ContentChild, TemplateRef} from '@angular/core';

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    @ContentChild(TemplateRef) template;
    items = [
        {
            value: "one",
            label: "Item one"
        },
        {
            value: "two",
            label: "Item Two"
        }
    ];

    ngAfterViewInit() {
        console.log('this.template', this.template);
    }
}
