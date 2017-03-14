import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
