import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { filters } from './fister';
import { FilterModel } from '../models/filter.model';
import { BookmakerModel } from '../models/bookmaker.model';
import { MarketModel } from '../models/market.model';

@Injectable()
export class MainService {
  public filter = null;
  constructor(private http: HttpClient) { }

  public getFilters() {

    /*
    return this.http.get('../filters.json', {responseType: 'json'})
      .map((result) => {
        console.log('result', result);
      });
      */


  return Observable.create(observer => {
      observer.next(filters);
    }).map((result) => {
      return result.map(filter => new FilterModel(filter));
    });
  }

  public getBookmakers(list: BookmakerModel[] | MarketModel[]) {
    let str = '';
    const listLength = list.length - 1;
    list.forEach((item, i) => {
      if (i < listLength) {
        str += `${item.name}, `;
      } else {
        str += item.name;
      }
    });

    return str;
  }

  public checkSort(list: any, type: string) {
    switch (type) {
      case 'nearFar':
        this.sort(list, 'time', 'small');
        break;
      case 'farNear':
        this.sort(list, 'time', 'big');
        break;
      case 'smallBig':
        this.sort(list, 'edge', 'small');
        break;
      case 'bigSmall':
        this.sort(list, 'edge', 'big');
        break;
    }
  }

  public sort(list: any, key: string, type: string) {
    list.sort((a, b) => {
      if (type === 'small') {
        return a[key] - b[key];
      } else if (type === 'big') {
        return b[key] - a[key];
      }
    });
    return list;
  }

}
