import {Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck, OnDestroy} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnDestroy {
    @Input('text') text;
    private feed: number;

    constructor() {
        this.feed = Math.floor(Math.random() * 100);
        console.log('Creating FeedComponent with feed#' + this.feed);
    }

    ngOnDestroy(): void {
        console.log(`FeedComponent feed #${this.feed} about to be destroyed`);
    }


    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
