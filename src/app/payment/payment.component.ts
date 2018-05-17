import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegExpService } from '../shared/services/reg-exp.service';
import { Mask } from '../shared/models/mask';
import { InfoCardComponent } from '../shared/components/info-card/info-card.component';

@Component({
  selector: 'odds-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public infoComponent;
  public formCard: FormGroup;
  public addCard = null;
  public textMaskNumber;
  public textMaskExpiration;
  public maskCVC;
  public cards = [
    {
      id: 1
    },
    {
      id: 2
    }
  ];

  constructor(private fb: FormBuilder) {
    this.textMaskNumber = Mask.cardNumber;
    this.textMaskExpiration = Mask.expiration;
    this.maskCVC = Mask.CVC;
    this.infoComponent = InfoCardComponent;
  }

  ngOnInit() {
  }

  public choosePay() {
    // TODO: send pay sistem to server
    console.log('pay is changed');
  }

  public removeCard() {
    // TODO: remove card need do
    console.log('remove card');
  }

  public shoveForm() {
    // TODO: need do form and shove her
    this.addCard = true;
    this.createForm();
    console.log('shoveForm');
  }

  public save(form?: FormGroup) {
    // TODO:  need do method save
    console.log('save card');
  }

  public openInfo() {
    // TODO:  need do method openInfo
    console.log('openInfo');
  }

  public createForm() {
    this.formCard = this.fb.group({
      name: [null, [
        Validators.required,
        Validators.min(6),
        Validators.maxLength(20)
      ]],
      number: [null, [
        Validators.required,
        Validators.min(12),
        Validators.maxLength(19)
      ]],
      expiration: [null, [
        Validators.required,
        Validators.min(5),
        Validators.maxLength(5)
      ]],
      cvs: [null, [
        Validators.required,
        Validators.min(3),
        Validators.maxLength(4)
      ]]
    });
  }

}
