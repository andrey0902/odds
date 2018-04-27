import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRouterModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
