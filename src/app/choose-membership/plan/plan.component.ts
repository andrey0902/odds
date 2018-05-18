import { Component, Input, OnInit } from '@angular/core';
import { MembershipModel } from '../shared/models/membership-model';

@Component({
  selector: 'odds-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() public plan: MembershipModel;
  public currency = '£';
  constructor() { }

  ngOnInit() {
  }

}
