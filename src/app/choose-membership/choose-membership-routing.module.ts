import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChooseMembershipComponent } from './choose-membership.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChooseMembershipComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ChooseMembershipRoutingModule { }
