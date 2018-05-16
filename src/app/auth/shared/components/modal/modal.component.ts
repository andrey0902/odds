import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OddsValidators } from '../../../../shared/services/odds-validators.service';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';
import { AuthCoreService } from '../../../../core/services/auth-core.service';

@Component({
  selector: 'odds-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public retrieveForm: FormGroup;
  public serverError = false;
  public successSend = false;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private handlerError: HandlerErrorService,
              private authServise: AuthCoreService) { }

  ngOnInit() {
    this.createForm();
    this.retrieveForm.valueChanges
      .subscribe(value => {
        if (this.serverError) {
          this.serverError = false;
        }
      });
  }
  public closed() {
    this.dialogRef.close();
  }

  public createForm() {
    this.retrieveForm = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        OddsValidators.checkEmail
      ]]
    });
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

  public onSubmit(event, form: FormGroup) {
    event.preventDefault();
    // TODO: need do method send to server and handler error when error iset intialize serverError
    console.log('value', form.value);

    if (form.valid) {
      this.authServise.resetPassword(form.value)
        .subscribe(response => {
          this.successSend = true;
        },
          error => {
            this.serverError = true;
          });
    }
  }
}
