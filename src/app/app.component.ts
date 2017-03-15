import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
declare var require;
@Component({
    selector: 'app-root',
    template: `
        <h1>
            {{title}}
        </h1>
        
          <button (click)="loadTheComponent('popup/popup.component')">Load the component</button>
         <button (click)="removeTheComponent()">Remove the component</button>
         <div #hiddenDiv></div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public show = false;
    public showAler = false;
    @ViewChild('hiddenDiv', {read: ViewContainerRef}) hiddenDiv: ViewContainerRef;

    loadTheComponent(fileName) {
        let file = require('./components/' + fileName);
        let actualClass;
        Object.keys(file).map((clasz) => {
            actualClass = file[clasz];
        })
        console.log('dynamnicComponent', actualClass);
        let componentFactory = this.cfr.resolveComponentFactory(actualClass)
        this.hiddenDiv.createComponent(componentFactory);
    }

    removeTheComponent() {
        this.hiddenDiv.clear();
    }

    constructor(public cfr: ComponentFactoryResolver) {
    }
}


