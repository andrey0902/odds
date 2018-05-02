import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoneComponent } from './done/done.component';
import { GuardService } from './services/guard.service';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

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
      },
      {
        path: 'confirm-email/:key',
        component: ConfirmEmailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouterModule { }
