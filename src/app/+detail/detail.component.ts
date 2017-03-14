import {Component} from "@angular/core";

console.log('`DetailComponent` component loaded asynchronously');

@Component({
    selector: 'detail',
    template: `
    <h1>Hello from Detail</h1>
    <span>
      <a [routerLink]=" ['./child-detail'] ">
        Child Detail
      </a>  
    </span>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent {

}
