import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../core/guard/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class MainRouterModule { }
