import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OddsValidators } from '../../shared/services/odds-validators.service';

@Component({
  selector: 'odds-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signIn: FormGroup;
  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
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
  }

}
