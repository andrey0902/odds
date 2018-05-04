import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthCoreService } from '../../core/services/auth-core.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OddsValidators } from '../../shared/services/odds-validators.service';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { HandlerErrorService } from '../../shared/services/handler-error.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'odds-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signIn: FormGroup;
  public hide = true;
  public serverError = false;
  constructor(private route: ActivatedRoute,
              private authService: AuthCoreService,
              private fb: FormBuilder,
              private router: Router,
              private socialAuthService: AuthService,
              private handlerError: HandlerErrorService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this.signIn.valueChanges.subscribe(value => {
      if (this.serverError) {
        this.serverError = false;
      }
    });
  }

  public createForm() {
    this.signIn = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        OddsValidators.checkEmail
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]]
    });
  }

  public login() {
    this.authService.login();
    console.log(this.authService.getUser());
    this.router.navigate(['/']);
  }

  public logOut() {
    this.authService.logOut();
  }

  public shoveUser() {
    console.log('user', this.authService.getUser());
  }

  public onSubmit(form: FormGroup) {
    console.log(form.value);
    console.log('form', form);
    this.serverError = true;
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
      }
    );
  }

  public getErrorMessage(control: FormControl) {
   return this.handlerError.getError(control);
  }

  public openForgot(event) {
    event.preventDefault();
    console.log('OPEN MODAL FORGOT PASSWORD');
    this.dialog.open(ModalComponent, {
      data: {title: 'test title'},
      width: '400px'
    });
  }

}
