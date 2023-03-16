import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
    selector: 'app-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

    tasks: Array<Task> = []

    constructor(private api: ApiService) { }

    ngOnInit(): void {
        this.api.getTasks().subscribe({
            next: (data: Array<Task>) => {
                this.tasks = data;
            },
            error: (err) => console.log(err)
        })
    }
}
