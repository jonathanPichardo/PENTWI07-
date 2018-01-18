import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { TodoList } from '../models/todo-list';

@Injectable()
export class StateService {

    private _lists: TodoList[] = [];
    private _selectedList: TodoList;

    private lists = new BehaviorSubject(this._lists);
    private selectedList = new BehaviorSubject(this._selectedList);

    private listsChange = new Subject < void > ();
    private selectedListChange = new Subject < TodoList > ();

    public lists$ = this.lists.asObservable();
    public selectedList$ = this.selectedList.asObservable();

    constructor() {

        this.listsChange.subscribe(() => {
            this._lists = [...this._lists];
            this.lists.next(this._lists);
        });

        this.selectedListChange.subscribe(v => {
          this._selectedList = { ...v };
          this.selectedList.next(this._selectedList);
        });

    }

    public addList(value: TodoList) {
        value.id = this._lists.length;
        this._lists.push(value);
        this.listsChange.next();
    }

    public removeList(value: TodoList) {
        this._lists.splice(value.id, 1);
        this.listsChange.next();
    }

    public updateList(value: TodoList) {
        this._lists[value.id] = value;
        this.listsChange.next();

        if (this._selectedList.id === value.id) {
            this.selectedListChange.next(value);
        }
    }

}
