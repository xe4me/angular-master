import {Component} from "@angular/core";

@Component({
    selector: 'feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {

    constructor() {
        console.log('FeedsComponent constructed ++++++ ');
    }

    ngOnInit() {
        console.log('FeedsComponent initialized ++++++ ');
    }

    onClick() {
        alert('You clicked on a feed');
    }

}
