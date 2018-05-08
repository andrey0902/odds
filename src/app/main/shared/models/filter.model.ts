import { BookmakerModel } from './bookmaker.model';
import { MarketModel } from './market.model';
import { OddsModel } from './odds.model';
import { EdgeModel } from './edge.model';
import { TimeModel } from './time.model';

export class FilterModel {
  name: string;
  id: number;
  bookmakers = [];
  markets: any[];
  oddsRange: any;
  edge: any;
  time: any;

  constructor(data: any) {
    this.name = data.name;
    this.id = data.id;
    this.bookmakers = data.bookmakers
      .map(item => new BookmakerModel(item));
    this.markets = data.markets
      .map(item => new MarketModel(item));
    this.oddsRange = new OddsModel(data.odds);
    this.edge = new EdgeModel(data.edge);
    this.time = new TimeModel(data.time);
  }

}
