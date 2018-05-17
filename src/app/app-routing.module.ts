import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoDataComponent } from './no-data/no-data.component';
import { MembershipModule } from './membership/membership.module';
import { MainModule } from './main/main.module';
import { ProfileModule } from './profile/profile.module';
import { FaqModule } from './faq/faq.module';
import { PaymentModule } from './payment/payment.module';
import { AuthGuard } from './core/guard/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'membership',
        loadChildren: './membership/membership.module#MembershipModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'choose-membership',
        loadChildren: './choose-membership/choose-membership.module#ChooseMembershipModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'FAQ',
        loadChildren: './faq/faq.module#FaqModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './main/main.module#MainModule',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '**',
        redirectTo: '/404',
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '404',
        component: NoDataComponent
      }
    ], {
      useHash: true,
      // enableTracing: true
    })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
