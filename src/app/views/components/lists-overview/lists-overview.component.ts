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
    public newListName: string;

    constructor(private readonly stateService: StateService) {}

    ngOnInit() {
        this.lists$ = this.stateService.lists$;
    }

    public addList($event) {
        const list = TodoList.getMockList();
        list.name = this.newListName;

        this.stateService.addList(list);

        this.newListName = '';

        $event.preventDefault();
    }

}
