import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthRouterModule } from './auth-router.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { LogoModule } from '../shared/logo/logo.module';
import { DoneComponent } from './done/done.component';
import { GuardService } from './services/guard.service';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../shared/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouterModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    LogoModule,
    ButtonModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    DoneComponent,
    ConfirmEmailComponent,
  ],
  providers: [GuardService]
})
export class AuthModule { }
