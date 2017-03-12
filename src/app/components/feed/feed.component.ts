import {
    Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck, OnDestroy,
    HostListener
} from "@angular/core";

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

    @HostListener('click', ['$event','feed']) onClick($event,feed) {
        console.log('FeedComponent click $event', $event,feed);
    }

    get randomFeed(): string {
        return this.text || 'feed #' + this.feed;
    }
}
