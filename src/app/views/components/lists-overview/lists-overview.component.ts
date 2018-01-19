import { Component, OnInit } from '@angular/core';
import { StateService, TodoList } from '../../../core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-lists-overview',
    templateUrl: './lists-overview.component.html',
    styleUrls: ['./lists-overview.component.css']
})
export class ListsOverviewComponent implements OnInit {

    public lists$: Observable < TodoList[] > ;

    constructor(private readonly stateService: StateService) {}

    ngOnInit() {
        this.lists$ = this.stateService.lists$;
    }

    public addList() {
        this.stateService.addList(new TodoList());

    }

}
