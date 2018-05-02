import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthCoreService } from '../../core/services/auth-core.service';
import { HandlerErrorService } from '../../shared/services/handler-error.service';
import { ProfileService } from '../../core/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'odds-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUp: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder,
              private authService: AuthCoreService,
              private handlerError: HandlerErrorService,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.signUp = this.fb.group({
      name: [null, [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      email: [null, []],
      password: [null, []]
    });
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

  public onSubmit(event, form: FormGroup) {
    event.preventDefault();
    if (form.valid) {
      this.authService.signUp(form.value)
        .subscribe(response => {
          this.profileService.emailUser = 'test@com.ua';
          this.router.navigate(['/auth/done']);
          console.log('response', response);
        });
    }
  }

}
