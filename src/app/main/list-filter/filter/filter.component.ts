import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'odds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filter;
  constructor() {}

  ngOnInit() {
  }

}
