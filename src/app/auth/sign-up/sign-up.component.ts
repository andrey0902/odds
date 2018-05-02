import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthCoreService } from '../../core/services/auth-core.service';

@Component({
  selector: 'odds-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUp: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder,
              private authService: AuthCoreService) { }

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

  public getErrorMessage() {

  }

  public onSubmit(event, form: FormGroup) {
    event.preventDefault();
    if (form.valid) {
      this.authService.signUp(form.value)
        .subscribe(response => {
          console.log('response', response);
        });
    }
  }

}
