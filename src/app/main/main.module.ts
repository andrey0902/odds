import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule } from './main-router.module';
import { HeaderModule } from '../shared/header/header.module';

import { MainComponent } from './main.component';
import { FilterComponent } from './list-filter/filter/filter.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { MatButtonModule, MatDialogModule, MatExpansionModule } from '@angular/material';
import { MainService } from './shared/services/main.service';
import { FilterModalComponent } from './shared/components/filter-modal/filter-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRouterModule,
    HeaderModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  declarations: [
    MainComponent,
    FilterComponent,
    ListFilterComponent,
    FilterModalComponent
  ],
  providers: [
    MainService
  ],
  entryComponents: [
    FilterModalComponent
  ]
})
export class MainModule { }
