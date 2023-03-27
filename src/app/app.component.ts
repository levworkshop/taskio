import { AfterViewInit, Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import { SessionService } from './core/session.service';

export interface Task {
    _id?: string | null;
    title?: string | null;
    complete?: boolean | null;
    description?: string | null;
}

export interface Project {
    _id?: string | null;
    title: string | null;
    description: string | null;
    image: string | null;
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

    constructor(
        private session: SessionService,
        private api: ApiService,
        private router: Router,
        private auth: AuthService
    ) { }

    loggedIn(): boolean {
        return this.auth.isLoggedIn();
    }

    ngAfterViewInit(): void {
        this.session.redirectToHome();
    }

    logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    }


}
