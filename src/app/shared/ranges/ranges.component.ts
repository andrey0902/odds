import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odds-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.scss']
})
export class RangesComponent implements OnInit {
  public invert = false;
  public max = 100;
  public min = 0;
  public step = 1;
  public thumbLabel = false;
  public value = 0;
  public vertical = false;
  public tickInterval = 1;
  constructor() { }

  ngOnInit() {
  }

}
