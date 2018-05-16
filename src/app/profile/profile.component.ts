import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OddsValidators } from '../shared/services/odds-validators.service';

@Component({
  selector: 'odds-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public planeMajor = true;
  public selectOptions = [
    {
      id: 0, name: 'USD', value: '$', isChecked: false
    },
    {
      id: 1, name: 'EURO', value: '€', isChecked: false
    },
    {
      id: 2, name: 'GBP', value: '£', isChecked: false
    },
  ];
  public selectOptions1 = [
    {
      id: 0, name: 'Decimal', value: 'decimal', isChecked: false
    },
    {
      id: 1, name: 'No decimal', value: 'No decimal', isChecked: false
    }
  ];

  public optionsCity = [
    {
      id: 0, name: 'UK', value: 'uk', isChecked: false
    },
    {
      id: 1, name: 'USA', value: 'usa', isChecked: false
    }
  ];

  public optionsCountry = [
    {
      id: 0, name: 'UK1', value: 'uk1', isChecked: false
    },
    {
      id: 1, name: 'USA1', value: 'usa1', isChecked: false
    }
  ];

  public selectSettings = {
    showCheckAll: false,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 1,
    isMultiple: false,
    isShoveChecked: false,
    maxHeight: '120px',
    closeOnSelect: true,
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm(this.planeMajor);
  }

  public createForm(planeMajor) {
    if (planeMajor) {
      this.profileForm = this.fb.group({
        name: [null, [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
        email: [null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          OddsValidators.checkEmail
        ]],
        currency: [null, [Validators.required]],
        oddsFormat: [null, [Validators.required]],
        address: [null, [Validators.required]],
        city: [null, [Validators.required]],
        state: [null, [Validators.required]],
        zip: [null, [Validators.required]],
        country: [null, [Validators.required]]
      });
    } else {
      this.profileForm = this.fb.group({
        name: [null, [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
        email: [null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          OddsValidators.checkEmail
        ]],
        currency: [null, [Validators.required]],
        oddsFormat: [null, [Validators.required]]
      });
    }
  }

  public submit(form: FormGroup) {
    console.log(form.value);
  }

}
