import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'odds-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signIn: FormGroup;
  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.signIn = this.fb.group({
      name: [null, Validators.required, Validators.minLength(5), Validators.maxLength(50)],
      password: [null, Validators.required, Validators.minLength(5), Validators.maxLength(50)]
    });
  }

  public login() {
    this.authService.login();
    console.log(this.authService.getUser());
  }

  public onSubmit(form: FormGroup) {
    console.log(form.value);
  }

}
