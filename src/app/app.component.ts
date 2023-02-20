import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'task io';
    today = new Date();



    getImagePath(): string {
        return "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904__340.jpg";
    }

    getTaskById(id: number): string {
        const tasks: Array<string> = [
            'Your first task',
            'A second task',
            'Another task'
        ]

        return tasks[id];
    }
}
