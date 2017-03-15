import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PopupComponent} from "./components/popup/popup.component";
import {AlertComponent} from "./components/alert/alert.component";

const DYNAMIC_COMPONENTS = [PopupComponent, AlertComponent];

@NgModule({
    declarations: [
        AppComponent,
        ...DYNAMIC_COMPONENTS
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    entryComponents: DYNAMIC_COMPONENTS,
    bootstrap: [AppComponent]
})
export class AppModule {
}
