import {Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
    @Input('text') text;
    private feed: number;

    constructor() {
        console.log('FeedComponent constructed ******');
        this.feed = Math.floor(Math.random() * 100);
    }

    ngOnInit(): void {
        console.log('FeedComponent Initialized ');
    }

    ngOnChanges(change: SimpleChanges): void {
        console.log('FeedComponent ngOnChanges', change);
    }

    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
