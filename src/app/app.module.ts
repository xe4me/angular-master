import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {FeedComponent} from './components/feed/feed.component';
import {FeedsComponent} from './components/feeds/feeds.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        FeedsComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
