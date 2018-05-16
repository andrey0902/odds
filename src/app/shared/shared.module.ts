import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegExpService } from './services/reg-exp.service';
import { OddsValidators } from './services/odds-validators.service';
import { HandlerErrorService } from './services/handler-error.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    RegExpService,
    OddsValidators,
    HandlerErrorService
  ]
})
export class SharedModule { }
