import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odds-header-table',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() filterStart;
  @Input() filterEdge;
  constructor() { }

  ngOnInit() {
  }

}
