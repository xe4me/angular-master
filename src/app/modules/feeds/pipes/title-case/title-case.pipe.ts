import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";
@Pipe({
    name: 'titlCase'
})
export class TitlCasePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return this.toTitleCase(value);
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

}