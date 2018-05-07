import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HandlerErrorService } from '../../shared/services/handler-error.service';
import { OddsValidators } from '../../shared/services/odds-validators.service';

@Component({
  selector: 'odds-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public passwordForm: FormGroup;
  public hide = true;
  public hideConfirm = true;
  private key: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private handlerError: HandlerErrorService) { }

  ngOnInit() {
    this.getKey();
  }

  public onSubmit(form: FormGroup): void {
    if (form.valid) {
      console.log('form.value', form.value);
    }
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

  private getKey(): void {
    this.route.paramMap.subscribe(param => {

      this.key = param.get('key');
      this.createForm();
      this.pathForm();
    });
  }

  private createForm() {
    this.passwordForm = this.fb.group({
      password: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      confirmPassword: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
    key: null
    },
      { validator: OddsValidators.passwordMatch });
  }

  private pathForm() {
    this.passwordForm.patchValue({
      key: this.key
    });
  }

}
