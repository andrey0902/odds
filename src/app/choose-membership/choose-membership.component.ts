import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/service/data-service.service';
import { MembershipList } from './shared/models/membershipList';

@Component({
  selector: 'odds-choose-membership',
  templateUrl: './choose-membership.component.html',
  styleUrls: ['./choose-membership.component.scss']
})
export class ChooseMembershipComponent implements OnInit {
  public planeType = 'monthly';
  public plans: MembershipList;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getMembershipList();
  }

  public choosePlan(type: string): void {
    this.planeType = type;
    console.log('type', type);
  }

  public getMembershipList() {
    this.dataService.getMembershipList()
      .subscribe((response: MembershipList) => {
        this.plans = response;
      });
  }

}
