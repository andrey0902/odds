import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseMembershipComponent } from './choose-membership.component';
import { ChooseMembershipRoutingModule } from './choose-membership-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChooseMembershipRoutingModule,
  ],
  declarations: [ChooseMembershipComponent]
})
export class ChooseMembershipModule { }
