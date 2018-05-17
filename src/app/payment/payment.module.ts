import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../shared/input/input.module';
import { ButtonModule } from '../shared/button/button.module';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HeaderModule,
    SharedModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    DirectivesModule,
  ],
  declarations: [
    PaymentComponent
  ]
})
export class PaymentModule { }
