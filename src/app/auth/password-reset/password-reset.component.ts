import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HandlerErrorService } from '../../shared/services/handler-error.service';
import { OddsValidators } from '../../shared/services/odds-validators.service';
import { AuthCoreService } from '../../core/services/auth-core.service';
import { MatSnackBar } from '@angular/material';

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
  private email: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private handlerError: HandlerErrorService,
              private authService: AuthCoreService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getKey();
    this.createForm();
  }

  public onSubmit(form: FormGroup): void {
    if (form.valid) {
      const params = {
        email: this.email,
        'reset_password_token': this.key,
      };
       this.authService.sendNewPassword(form.value.password, params)
         .subscribe(result => {
           this.snackBar.open('Password changed successfully', 'success', {
             duration: 2000,
           });
           setTimeout(() => {
             this.router.navigate(['/auth/sign-in']);
           }, 2500);
         }, error => {
           this.snackBar.open(error.error.full_messages
             , 'Error', {
               duration: 2000,
             });
           setTimeout(() => {
             this.router.navigate(['/auth/sign-up']);
           }, 2500);
         });
    }
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

  private getKey(): void {
    this.route.paramMap.subscribe(param => {

      this.key = param.get('key');
      this.email = param.get( 'email');
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
    },
      { validator: OddsValidators.passwordMatch });
  }

}
