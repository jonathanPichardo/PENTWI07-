import { Component, OnInit, Input } from '@angular/core';

import { TodoList } from '../../../core';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.css']
})
export class ListSummaryComponent implements OnInit {

  @Input()
  public list: TodoList;

  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
