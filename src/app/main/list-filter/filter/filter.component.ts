import {Component, Input, OnInit} from '@angular/core';
import { BookmakerModel } from '../../shared/models/bookmaker.model';
import { MainService } from '../../shared/services/main.service';
import { MarketModel } from '../../shared/models/market.model';

@Component({
  selector: 'odds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filter;
  constructor(private service: MainService) {}

  ngOnInit() {
    console.log('this.filter', this.filter);
  }

  public getListText(list: BookmakerModel[] | MarketModel[]) {
    return this.service.getBookmakers(list);
  }

}
