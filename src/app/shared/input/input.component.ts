import { AfterViewInit, Component, ElementRef, forwardRef, Injector, OnInit, ViewChild } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {HandlerErrorService} from '../services/handler-error.service';
export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'odds-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @ViewChild('simpleInput') public simpleInput: ElementRef;
  ngControl: NgControl;
  public disabled: boolean;
  public focus = false;
  onChangeValue = (_: any) => { };
  onTouched = (_: any) => { };
  constructor(private inj: Injector,
              private handlerError: HandlerErrorService) { }

  ngOnInit() {
    this.ngControl = this.inj.get(NgControl);
  }

  ngAfterViewInit(): void {
    if (this.ngControl) {
      this.ngControl.valueChanges
        .subscribe(value => {
          if (value) {
            this.focus = false;
          }
        });
    }
  }

  public onChange(value) {
    this.onChangeValue(value);
    this.onTouched(true);
  }

  registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    if (obj) {
      this.simpleInput.nativeElement.value = obj;
      this.onTouched(false);
    }
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

  public blurFocus() {
    this.focus = true;
  }

}
