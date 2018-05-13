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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputModule} from '../shared/input/input.module';
import { SelectModule } from '../shared/select/select.module';
import { InputNumberModule } from '../shared/input-number/input-number.module';
import { ButtonModule } from '../shared/button/button.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainRouterModule,
    HeaderModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    InputModule,
    SelectModule,
    InputNumberModule,
    ButtonModule,
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
