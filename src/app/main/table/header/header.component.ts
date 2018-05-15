import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'odds-header-table',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public changeFilter = new EventEmitter();
  @Input() filterStart;
  @Input() filterEdge;
  constructor() { }

  ngOnInit() {
  }

  public sendFilter(filter) {
    this.changeFilter.emit(filter);
  }

}
