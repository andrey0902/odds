import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'odds-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  public edit = false;
  public filterForm: FormGroup;
  public selectOptions = [
    {
      id: 0, name: 'theme 0', value: 0, isChecked: false
    },
    {
      id: 1, name: 'theme 1', value: 1, isChecked: false
    },
    {
      id: 2, name: 'theme 2', value: 2, isChecked: false
    },
    {
      id: 3, name: 'theme 3', value: 3, isChecked: false
    },
    {
      id: 4, name: 'theme 4', value: 4, isChecked: false
    }
  ];  public marketsOptions = [
    {
      id: 0, name: 'markets 0', value: 0, isChecked: false
    },
    {
      id: 1, name: 'markets 1', value: 1, isChecked: false
    },
    {
      id: 2, name: 'markets 2', value: 2, isChecked: false
    },
    {
      id: 3, name: 'markets 3', value: 3, isChecked: false
    },
    {
      id: 4, name: 'markets 4', value: 4, isChecked: false
    }
  ];

  public selectSettings = {
    showCheckAll: true,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 7,
    isMultiple: true,
    isShoveChecked: true,
    maxHeight: '200px'
  };
  public selectSettings2 = {
    showCheckAll: true,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 7,
    isMultiple: true,
    isShoveChecked: true,
    maxHeight: '150px'
  };
  constructor(public dialogRef: MatDialogRef<FilterModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.filterForm.valueChanges
      .subscribe(value => {
        console.log(this.filterForm.get('name'));
        console.log(value);
      });
    if (this.data) {
      this.patchForm(this.data);
      this.edit = true;
    }
    console.log('this.data', this.data);
  }

  public createForm() {
    this.filterForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      bookmakers: [null, [Validators.required]],
      markets: [null, [Validators.required]],
      oddsRange: this.fb.group({
        from: [null, [Validators.required]],
        to: [null, [Validators.required]]
      }),
      edge: this.fb.group({
        from: [null, [Validators.required]],
        to: [null, [Validators.required]]
      }),
      time: this.fb.group({
        from: [null, [Validators.required]],
        to: [null, [Validators.required]]
      })
    });
  }

  public patchForm(data) {
    this.filterForm.patchValue({
      name: data.name,
      bookmakers: data.bookmakers,
      markets: data.markets,
      oddsRange: {
        from: data.oddsRange.from,
        to: data.oddsRange.to
      },
      edge: {
        from: data.edge.from,
        to: data.edge.to
      },
      time: {
        from: data.time.from,
        to: data.time.to
      }
    });
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('send to server create filter', form.value);
      this.dialogRef.close({
        form: form.value,
        edit: this.edit
      });
    }
  }

}
