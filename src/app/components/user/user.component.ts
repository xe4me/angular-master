import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    public users = new FormArray([]);

    customValidator() {
        return (c) => {
            if (c.value === 'milad') {
                return {
                    invalidName: true
                }
            } else {
                return null;
            }
        }
    }

    addUser() {
        let validators = Validators.compose([Validators.required, Validators.minLength(10), this.customValidator()])
        let formGroup = new FormGroup({
            name: new FormControl('', validators),
            age: new FormControl(),
            numbers: new FormArray([]),
        });
        this.users.push(formGroup);
    }

    removeUser() {
        this.users.removeAt(this.users.length + 1);
    }

    addPhoneNumber(user: FormGroup) {

        (<any>user.controls['numbers']).push(new FormControl('0402095291'));
    }

    removePhoneNumber(user) {
        // if (this.numbers[user]) {
        //     this.numbers[user].pop();
        // }
    }
}
