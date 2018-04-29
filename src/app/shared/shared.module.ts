import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegExpService } from './services/reg-exp.service';
import { OddsValidators } from './services/odds-validators.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RegExpService,
    OddsValidators
  ]
})
export class SharedModule { }
