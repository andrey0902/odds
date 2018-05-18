import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseMembershipComponent } from './choose-membership.component';
import { ChooseMembershipRoutingModule } from './choose-membership-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { DataServiceService } from './shared/service/data-service.service';
import { PlanComponent } from './plan/plan.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ChooseMembershipRoutingModule,
    HeaderModule,
    MatCardModule,
  ],
  declarations: [ChooseMembershipComponent, PlanComponent],
  providers: [DataServiceService]
})
export class ChooseMembershipModule { }
