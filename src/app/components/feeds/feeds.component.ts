import {Component} from "@angular/core";

@Component({
    selector: 'feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {

    constructor() {
    }

    onClick() {
        alert('You clicked on a feed');
    }

}
