import { AfterViewInit, Component, ElementRef, forwardRef, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { HandlerErrorService } from '../services/handler-error.service';
export const INPUT_NUMBER_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumberComponent),
  multi: true,
};
@Component({
  selector: 'odds-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [INPUT_NUMBER_ACCESSOR]
})
export class InputNumberComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() public decimal = false;
  @Input() public negative = false;
  public step = 1;
  @ViewChild('inputNumber') public inputNumber: ElementRef;
  ngControl: NgControl;
  public disabled: boolean;
  public focus = false;
  public countValue = 0;
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

  public increment() {
    if (this.decimal) {
      this.step = 0.1;
    }

    this.countValue =  this.countValue + this.step;
    this.countValue = parseFloat(this.countValue.toFixed(1));

    console.log('increment', this.countValue);
    this.setValue(this.countValue);
    this.onChangeValue(this.countValue);
    this.onTouched(true);
  }

  public decrement() {

    if (+this.countValue <= 0 && !this.negative) {
      return;
    }

    if (this.decimal) {
      this.step = 0.1;
    }
    this.countValue = +this.countValue - this.step;

    this.countValue = parseFloat(this.countValue.toFixed(1));
    console.log('decrement', this.countValue);
    this.setValue(this.countValue);
    this.onChangeValue(this.countValue);
    this.onTouched(true);
  }

  writeValue(obj: any): void {
    const number = parseFloat(obj);
    if (number) {
      this.setValue(number);
      this.countValue = number;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onBlur() {
    this.focus = false;
  }

  public onFocus() {
    this.focus = true;
  }

  public setValue(value) {
    this.inputNumber.nativeElement.value = value;
  }

  public getErrorMessage(control: FormControl) {
    return this.handlerError.getError(control);
  }

}
