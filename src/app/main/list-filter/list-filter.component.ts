import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterModel } from '../shared/models/filter.model';
import { BookmakerModel } from '../shared/models/bookmaker.model';
import { MarketModel } from '../shared/models/market.model';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'odds-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {
  panelOpenState = false;
  public applyFilter = null;
  @Output() public editFilter = new EventEmitter();
  @Input() public filters: FilterModel[];
  constructor(private service: MainService) { }

  ngOnInit() {
  }

  public getListText(list: BookmakerModel[] | MarketModel[]) {
    return this.service.getBookmakers(list);
  }

  public edit(filter: FilterModel) {
    console.log('need open edit modal');
    this.editFilter.emit(filter);
  }

  public apply(id) {
    this.applyFilter = id;
    console.log('send to server id filter');
  }

}
