import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCoreService } from './services/auth-core.service';
import { AuthGuard } from './guard/auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthCoreService,
    AuthGuard
  ]
})
export class CoreModule { }
