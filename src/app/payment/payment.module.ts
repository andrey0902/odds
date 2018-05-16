import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HeaderModule,
    SharedModule,
  ],
  declarations: [
    PaymentComponent
  ]
})
export class PaymentModule { }
