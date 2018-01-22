import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../../core/models/todo-item';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input()
    public item: TodoItem;

    constructor() {}

    ngOnInit() {}

}
