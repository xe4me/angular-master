import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FeedsComponent} from "./components/feeds/feeds.component";
import {FeedComponent} from "./components/feed/feed.component";
import {SearchComponent} from "./components/search/search.component";
import {HttpModule} from "@angular/http";
import {GithubService} from "./services/github.service";
import {ChangeTextOnTypeDirective} from "./directives/change-text-on-type/change-text-on-type.directive";
import {MaterialModule} from "@angular/material";
import {TitlCasePipe} from "./pipes/title-case/title-case.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export const DECLARATIONS = [
    FeedsComponent,
    TitlCasePipe,
    SearchComponent,
    ChangeTextOnTypeDirective,
    FeedComponent
];
@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpModule,
        BrowserModule
    ],
    providers: [
        GithubService]
})
export class FeedsModule {
}
