import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    @Input('text') text;
    private feed: number;

    constructor() {
        console.log('FeedComponent constructed ******');
        this.feed = Math.floor(Math.random() * 100);
    }

    ngOnInit(): void {
        console.log('FeedComponent Initialized ');
    }

    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
