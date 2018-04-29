import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoDataComponent } from './no-data/no-data.component';
import { MembershipModule } from './membership/membership.module';
import { MainModule } from './main/main.module';
import { ProfileModule } from './profile/profile.module';
import { FaqModule } from './faq/faq.module';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
      },
      {
        path: 'membership',
        loadChildren: './membership/membership.module#MembershipModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },
      {
        path: 'FAQ',
        loadChildren: './faq/faq.module#FaqModule'
      },
      {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule'
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './main/main.module#MainModule'
      },
      {
        path: '**',
        redirectTo: '/404'
      },
      {
        path: '404',
        component: NoDataComponent
      }
    ], {
      useHash: true,
      enableTracing: true
    })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
