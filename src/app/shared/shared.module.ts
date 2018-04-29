import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegExpService } from './services/reg-exp.service';
import { OddsValidators } from './services/odds-validators.service';
import { HandlerErrorService } from './services/handler-error.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RegExpService,
    OddsValidators,
    HandlerErrorService
  ]
})
export class SharedModule { }
