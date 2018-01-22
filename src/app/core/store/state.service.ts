import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/filter';

import { TodoList } from '../models/todo-list';
import { TodoItem } from '../models/todo-item';

@Injectable()
export class StateService {

    private _lists: TodoList[] = [];
    private _selectedList: TodoList;

    private lists = new BehaviorSubject(this._lists);
    private selectedList = new BehaviorSubject(this._selectedList);

    private listsChange = new Subject < void > ();
    private selectedListChange = new Subject < TodoList > ();

    public lists$ = this.lists.asObservable();
    public selectedList$ = this.selectedList.filter(x => !!x);

    constructor(private readonly router: Router) {

        this.listsChange.subscribe(() => {
            this._lists = [...this._lists];
            this.lists.next(this._lists);
        });

        this.selectedListChange.subscribe(v => {
            this._selectedList = { ...v };
            this.selectedList.next(this._selectedList);
        });

        this.router.events.subscribe(e => {

            if (!(e instanceof NavigationEnd)) {
                return;
            }

            const id = e.urlAfterRedirects.match(/.*\/(.*)/)[1];

            if (id) {
                const idx = this._lists.findIndex(list => list.id === parseInt(id));
                this.selectedListChange.next(this._lists[idx]);
            }

        });

    }

    public listExists = id => !!this._lists.find(x => x.id === parseInt(id))

    public addList(value: TodoList) {
        value.id = Math.floor(Math.random() * 100000);

        this._lists.push(value);
        this.listsChange.next();
    }

    public removeList(value: TodoList) {
        const idx = this._lists.findIndex(list => list.id === value.id);

        this._lists.splice(idx, 1);

        this.listsChange.next();
    }

    public updateList(value: TodoList) {

        const idx = this._lists.findIndex(list => list.id === value.id);

        this._lists[idx] = value;
        this.listsChange.next();

        if (this._selectedList.id === value.id) {
            this.selectedListChange.next(value);
        }
    }

    public addTask(task: TodoItem, listId: number) {

        const idx = this._lists.findIndex(l => l.id === listId);

        const list = { ...this._lists[idx] };
        list.items = [...list.items, task];

        this.updateList(list);
    }

    public removeTask(taskId: number, listId: number) {

        const idx = this._lists.findIndex(l => l.id === listId);

        const list = { ...this._lists[idx] };
        list.items.splice(taskId, 1);

        this.updateList(list);
    }

}
