import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() fortSize = '14px';
  @Input() text: string;
  @Input() valid: boolean;
  @Input() invalid: boolean;
  constructor() { }

  ngOnInit() {
  }

}
