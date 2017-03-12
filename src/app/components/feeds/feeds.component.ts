import {Component} from "@angular/core";

@Component({
    selector: 'feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {
    private showFirstFeed: boolean = true;

    onClick() {
        alert('You clicked on a feed');
    }

    removeFirstFeed() {
        this.showFirstFeed = !this.showFirstFeed;
    }

}
