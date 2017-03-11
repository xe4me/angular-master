import {Component} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    private feed: number;

    constructor() {
        this.feed = Math.floor(Math.random() * 100);
    }

    get randomFeed(): string {
        return 'feed #' + this.feed;
    }
}
