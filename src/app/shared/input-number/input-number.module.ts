import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,

  ],
  declarations: [
    InputNumberComponent,
  ],
  exports: [
    InputNumberComponent
  ]
})
export class InputNumberModule { }
