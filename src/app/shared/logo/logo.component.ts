import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odds-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() fontSize = '24px';
  constructor() { }

  ngOnInit() {
  }

}
