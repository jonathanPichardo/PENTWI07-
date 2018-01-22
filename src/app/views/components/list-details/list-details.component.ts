import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { StateService, TodoItem, TodoList } from '../../../core';

@Component({
    selector: 'app-list-details',
    templateUrl: './list-details.component.html',
    styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

    public listId: number;
    public list$: Observable < TodoList > ;

    public newTaskDescription: string;

    constructor(private readonly stateService: StateService) {}

    ngOnInit() {
        this.list$ = this.stateService.selectedList$;
        this.list$.subscribe(list => this.listId = list.id);
    }

    public addTask($event) {

      const newTask = new TodoItem();
      newTask.description = this.newTaskDescription;

      this.stateService.addTask(newTask, this.listId);

      this.newTaskDescription = '';

      $event.preventDefault();
    }

    public removeTask(id: number) {
        this.stateService.removeTask(id, this.listId);
    }
}
