import { AfterViewInit, Component } from '@angular/core';
import { SessionService } from './core/session.service';

export interface Task {
    _id?: string | null;
    title?: string | null;
    complete?: boolean | null;
    description?: string | null;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    status: 'PLANNED' | 'IN PROGRESS' | 'DONE'
}

export interface User {
    _id?: string | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    token?: string | null;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    developer = 'Yoyo technolegies';

    constructor(private session: SessionService) { }

    ngAfterViewInit(): void {
        this.session.redirectToHome();
    }


}
