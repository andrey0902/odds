import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { RouterMembershipModule } from './router-membership.module';

@NgModule({
  imports: [
    CommonModule,
    RouterMembershipModule
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
