import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {FeedsModule} from "./modules/feeds/feeds.motule";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FeedsModule,
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
