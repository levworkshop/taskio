import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
    // nameField = '';

    // formValid(): boolean {
    //     return (this.nameField.length >= 2);
    // }

    private nameMaxLength = 5;

    signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(this.nameMaxLength)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

    nameFieldErr(): string {
        const control = this.signupForm.get('name');
        if (
            !control ||
            !control.errors ||
            !control.dirty ||
            !control.touched
        ) {
            return '';
        }

        if (control.getError('required')) {
            return 'This field is required';
        }

        if (control.getError('maxlength')) {
            return `Name cannot be longer than ${this.nameMaxLength}`;
        }

        return '';
    }

    emailFieldErr(): string {
        const control = this.signupForm.get('email');
        if (
            !control ||
            !control.errors ||
            !control.dirty ||
            !control.touched
        ) {
            return '';
        }

        if (control.getError('required')) {
            return 'This field is required';
        }

        if (control.getError('email')) {
            return 'Email is not valid';
        }

        return '';
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }

        console.log(this.signupForm.value);
    }


}
