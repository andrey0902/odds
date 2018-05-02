import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'odds-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUp: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.signUp = this.fb.group({
      name: [null, []],
      email: [null, []],
      password: [null, []]
    });
  }

  public getErrorMessage() {

  }

}
