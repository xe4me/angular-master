import {
    Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck,
    ChangeDetectorRef, OnInit, ViewEncapsulation
} from "@angular/core";

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css'],
    host: {
        '(click)': 'updateName("updatedByHost")'
    }

})
export class FeedComponent {
    @Input('user') user ;

    constructor(public changeDetector: ChangeDetectorRef) {
    }
}
