import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule } from './main-router.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
