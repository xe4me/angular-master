import {Component} from "@angular/core";

@Component({
    selector: 'about',
    template: `
    <h1>About page</h1>
  `
})
export class AboutComponent {
    constructor(){
        console.log('Constucting about page');
    }
}
