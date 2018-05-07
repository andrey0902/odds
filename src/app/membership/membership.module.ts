import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { RouterMembershipModule } from './router-membership.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterMembershipModule,
    HeaderModule,
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
