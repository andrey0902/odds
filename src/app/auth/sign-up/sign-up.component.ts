import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthCoreService } from '../../core/services/auth-core.service';
import { HandlerErrorService } from '../../shared/services/handler-error.service';
import { ProfileService } from '../../core/services/profile.service';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

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
              private router: Router,
              private socialAuthService: AuthService) { }

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

}
