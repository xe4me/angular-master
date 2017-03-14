import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
    declarations: [
        AppComponent,
        DropdownComponent
    ],
    imports: [
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
w