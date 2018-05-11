import { AfterViewInit, Component, ElementRef, forwardRef, Injector, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
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
    this.ngControl.valueChanges
      .subscribe(value => {
        if (value) {
          this.focus = false;
        }
      });
  }

  public onChange(value) {
    this.onChangeValue(value);
    this.onTouched(true);
  }

  public increment() {
    this.countValue = +this.countValue + 1;
    console.log('increment', this.countValue);
    this.setValue(this.countValue);
    this.onChangeValue(this.countValue);
    this.onTouched(true);
  }

  public decrement() {
    this.countValue = +this.countValue - 1;
    console.log('decrement', this.countValue);
    this.setValue(this.countValue);
    this.onChangeValue(this.countValue);
    this.onTouched(true);
  }

  writeValue(obj: any): void {
    if (obj) {
      this.setValue(obj);
      this.countValue = obj;
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

  public toggleFocus() {
    this.focus = !this.focus;
  }

  public setValue(value) {
    this.inputNumber.nativeElement.value = value;
  }

}
