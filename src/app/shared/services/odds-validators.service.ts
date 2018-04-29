import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { RegExpService } from './reg-exp.service';

@Injectable()
export class OddsValidators extends Validators {

  constructor() {
    super();
  }
  public static checkEmail(control: AbstractControl): {[key: string]: any} {
    if (control.value !== null) {
      if (control.value.length > 0) {
        return !RegExpService.email.test(control.value) ? {patternEmail: true} : null;
      }
    }
  }
}
