import {Component} from "@angular/core";

console.log('`ChildDetail` component loaded asynchronously');

@Component({
    selector: 'child-detail',
    template: `
    <h1>Hello from Child Detail</h1>    
  `,
})
export class ChildDetailComponent {


}
