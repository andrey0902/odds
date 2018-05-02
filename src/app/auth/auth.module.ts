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
    MatIconModule,
    LogoModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
