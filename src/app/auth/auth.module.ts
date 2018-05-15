import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthRouterModule } from './auth-router.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatSnackBarModule
} from '@angular/material';
import { LogoModule } from '../shared/logo/logo.module';
import { DoneComponent } from './done/done.component';
import { GuardService } from './services/guard.service';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ButtonModule } from '../shared/button/button.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ResetGuard } from './services/reset-guard';

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
    MatDialogModule,
    MatSnackBarModule,
    LogoModule,
    ButtonModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    DoneComponent,
    ConfirmEmailComponent,
    ModalComponent,
    PasswordResetComponent,
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    GuardService,
    ResetGuard,
  ]
})
export class AuthModule { }
