import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoneComponent } from './done/done.component';
import { GuardService } from './services/guard.service';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ResetGuard } from './services/reset-guard';

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
      },
      {
        path: 'password_reset/:key/:email',
        component: PasswordResetComponent,
        canActivate: [
          ResetGuard
        ]
      },
      {
        path: 'password_reset',
        redirectTo: '/'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouterModule { }
