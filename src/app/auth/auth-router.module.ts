import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoneComponent } from './done/done.component';
import { GuardService } from './services/guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'done',
        component: DoneComponent,
        canActivate: [
          GuardService
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouterModule { }
