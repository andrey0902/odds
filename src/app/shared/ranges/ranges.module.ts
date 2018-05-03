import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangesComponent } from './ranges.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
  ],
  declarations: [
    RangesComponent
  ],
  exports: [
    RangesComponent
  ]
})
export class RangesModule { }
