import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ClickOutSideDirective } from '../../directives/click-out-side.directive';

import 'rxjs/add/operator/skip';

@Component({
  selector: 'odds-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit, AfterViewInit {
  @ViewChild(ClickOutSideDirective) public clickOut: ClickOutSideDirective;
  public canClosed = false;
  public viewContainer: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  public closed() {
    // if (this.canClosed) {
    //   this.viewContainer.clear();
    // }
  }

  ngAfterViewInit(): void {
    this.clickOut.clickOutside
      .skip(1)
      .subscribe(value => {
        this.viewContainer.clear();
      });

    this.canClosed = true;
    // setTimeout(() => {
    //   this.canClosed = true;
    // }, 200);
  }
}
