import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../core/store/state.service';

@Component({
  selector: 'app-lists-overview',
  templateUrl: './lists-overview.component.html',
  styleUrls: ['./lists-overview.component.css']
})
export class ListsOverviewComponent implements OnInit {

  constructor(private readonly stateService: StateService) { }

  ngOnInit() {
  }

}
