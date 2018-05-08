import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '../shared/models/filter.model';

@Component({
  selector: 'odds-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {
  panelOpenState = false;
  @Input() public filters: FilterModel[];
  constructor() { }

  ngOnInit() {
  }

}
