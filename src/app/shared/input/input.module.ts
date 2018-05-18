import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
