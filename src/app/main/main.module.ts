import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule } from './main-router.module';
import { HeaderModule } from '../shared/header/header.module';

import { MainComponent } from './main.component';
import { FilterComponent } from './list-filter/filter/filter.component';
import { ListFilterComponent } from './list-filter/list-filter.component';


@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
    HeaderModule,
  ],
  declarations: [
    MainComponent,
    FilterComponent,
    ListFilterComponent
  ]
})
export class MainModule { }
