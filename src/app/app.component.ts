import { Component } from '@angular/core';

interface Task {
    title: string;
    complete: boolean;
    description?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'task io';
    today = new Date();

    tasks: Array<Task> = [
        {
            title: 'Your first task',
            complete: false,
            description: 'aaa'
        },
        {
            title: 'A second task',
            complete: false,
        },
        {
            title: 'Another task',
            complete: false,
        },
        {
            title: 'Task #4',
            complete: true
        }
    ]

    listStatusCss(): string {
        return this.tasks.length <= 3 ? 'text-success' : 'text-dark';
    }

    completedCss(task: Task): string {
        return task.complete ? 'text-decoration-line-through' : '';
    }

    getImagePath(): string {
        return "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904__340.jpg";
    }

    // getTaskById(id: number): string {
    //     return this.tasks[id];
    // }
}
