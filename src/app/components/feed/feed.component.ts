import {Component, Input} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    @Input('text') text;
    private feed: number;

    constructor() {
        this.feed = Math.floor(Math.random() * 100);
    }

    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
