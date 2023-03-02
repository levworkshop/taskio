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

    signupForm = new FormGroup({
        name: new FormControl('', {
            validators: Validators.required
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }

        console.log(this.signupForm.value);
    }


}
