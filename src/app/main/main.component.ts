import { Component, OnInit } from '@angular/core';
import { AuthCoreService } from '../core/services/auth-core.service';
import { MainService } from './shared/services/main.service';
import { FilterModel } from './shared/models/filter.model';
import { MatDialog } from '@angular/material';
import { FilterModalComponent } from './shared/components/filter-modal/filter-modal.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'odds-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  panelOpenState = false;
  public control;
  public control1;
  public listFilter: FilterModel[];
  constructor(private authService: AuthCoreService,
              private mainService: MainService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getFilters();
    this.control = new FormControl('0', [Validators.required]);
    this.control1 = new FormControl('0', [Validators.required]);
  }

  public logOut() {
    this.authService.logOut();
  }

  public openModal(filter?): void {
    console.log('open modal');
    const dialogRef = this.dialog.open(FilterModalComponent,  {
      data: filter ? filter : null,
      minWidth: '250px',
      maxWidth: '500px',
      width: '350px',
      maxHeight: '630px',
    });

    dialogRef.afterClosed().subscribe(value => {
      console.log('value form', value);
      if (value) {
        if (value.edit) {
          console.log('edit filter', value.form);
        } else {
          console.log('create filter', value.form);
          this.listFilter.push(value.form);
        }
      }
    });
  }



  public getFilters() {
    this.mainService.getFilters()
      .subscribe(res => {
        console.log('res', res);
        this.listFilter = res;
      });
  }

  public editFilter(event) {
    this.openModal(event);
  }

}
