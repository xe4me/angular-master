import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ROUTES} from "./app.routes";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home";
import {AboutComponent} from "./about";
import {NoContentComponent} from "./no-content";


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
    ]
})
export class AppModule {

}

