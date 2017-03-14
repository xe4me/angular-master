import {Component, Output, EventEmitter} from "@angular/core";
import {FormControl} from "@angular/forms";
import {GithubService} from "../../services/github.service";
@Component({
    selector: 'search',
    template: `
        <input type="text" [formControl]="formControl">   
    `
})
export class SearchComponent {
    public formControl = new FormControl();
    @Output('onFoundUser') onFoundUser = new EventEmitter<any>();

    constructor(public githubService: GithubService) {

    }

    ngOnInit() {
        this.formControl
            .valueChanges
            //.debounceTime(100)
            .distinctUntilChanged()
            .switchMap((value) => this.githubService.getUsers(value))
            .map((response) => {
                let user  = response.json()
                user.name = "Change by map" + user.name;
                console.log('user',user);
                return user;
            })
            .filter((user)=>user.name!=='Change by mapGolovin')
            .subscribe((user) => {
                this.onFoundUser.emit(user);
            })
    }
}