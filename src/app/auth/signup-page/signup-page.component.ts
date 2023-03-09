import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements AfterViewInit {
    // nameField = '';

    // formValid(): boolean {
    //     return (this.nameField.length >= 2);
    // }

    @ViewChild('nameFieldRef') nameField!: ElementRef;
    // @ViewChild('emailFieldRef') emailField!: ElementRef;

    signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(20)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        this.nameField.nativeElement.focus();
    }

    getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }

        console.log(this.signupForm.value);
    }


}
