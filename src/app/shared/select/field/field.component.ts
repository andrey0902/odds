import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odds-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() title;
  @Input() disabled;
  @Input() isVisible: boolean;
  @Input() hasError: boolean;
  constructor() {}

  ngOnInit() {
  }

}
