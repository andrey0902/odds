import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRouterModule } from './auth-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouterModule,
    SharedModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
