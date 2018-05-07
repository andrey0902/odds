import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {
  public emailUser = null;
  public user = null;
  constructor() { }

  public getUser$() {
    return Observable.create(observer => {
      observer.next(this.user);
    });
  }

}
