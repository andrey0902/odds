import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegExpService } from './services/reg-exp.service';
import { OddsValidators } from './services/odds-validators.service';
import { HandlerErrorService } from './services/handler-error.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    NavigationComponent,
    InfoCardComponent,
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    RegExpService,
    OddsValidators,
    HandlerErrorService
  ],
  entryComponents: [
    InfoCardComponent
  ]
})
export class SharedModule { }
