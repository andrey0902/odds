import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { RouterMembershipModule } from './router-membership.module';
import { HeaderModule } from '../shared/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterMembershipModule,
    HeaderModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
