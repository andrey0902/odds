import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule } from './main-router.module';
import { HeaderModule } from '../shared/header/header.module';

import { MainComponent } from './main.component';
import { FilterComponent } from './list-filter/filter/filter.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { MainService } from './shared/services/main.service';


@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
    HeaderModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  declarations: [
    MainComponent,
    FilterComponent,
    ListFilterComponent
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
