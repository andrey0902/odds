import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MembershipComponent } from './membership.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: MembershipComponent
    }])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouterMembershipModule { }
