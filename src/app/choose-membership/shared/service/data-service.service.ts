import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MembershipList } from '../models/membershipList';

@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) {
    this.getMembershipList();
  }

  public getMembershipList() {
    return this.http.get('./assets/membershipList.json')
      .map(value => {
        console.log(new MembershipList(value));
        return new MembershipList(value);
      });
  }

}
