import {Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges, DoCheck {
    @Input('text') text;
    private feed: number;

    constructor() {
        this.feed = Math.floor(Math.random() * 100);
    }

    ngOnChanges(change: SimpleChanges): void {
        console.log('FeedComponent ngOnChanges', change);
    }

    ngOnInit(): void {
        console.log('FeedComponent Initialized ');
    }

    ngDoCheck(): void {
        console.log('FeedComponent ngDoCheck %%% ');
    }

    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
