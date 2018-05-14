import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public filterStart = null;
  public filterEdge = null;

  constructor() { }

  ngOnInit() {
  }

}
