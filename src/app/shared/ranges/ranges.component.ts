import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'odds-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.scss']
})
export class RangesComponent implements OnInit, AfterViewInit {
  @ViewChild('volume') public volume: ElementRef;
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
  ngAfterViewInit() {

  }

  public remaining () {
    return 99.5 - +this.value;
  }
}
