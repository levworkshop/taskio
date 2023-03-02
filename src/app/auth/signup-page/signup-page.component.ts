import { Component } from '@angular/core';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
    nameField = '';

    formValid(): boolean {
        return (this.nameField.length >= 2);
    }
}
