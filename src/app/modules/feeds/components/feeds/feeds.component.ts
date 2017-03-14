import {Component, ChangeDetectionStrategy} from "@angular/core";
@Component({
    selector: 'feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedsComponent {
    public user;

    updateUser(user) {
        this.user = user;
    }
}
