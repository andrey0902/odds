import { Component, OnInit } from '@angular/core';
import { AuthCoreService } from '../core/services/auth-core.service';
import { MainService } from './shared/services/main.service';
import { FilterModel } from './shared/models/filter.model';
import { MatDialog } from '@angular/material';
import { FilterModalComponent } from './shared/components/filter-modal/filter-modal.component';

@Component({
  selector: 'odds-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  panelOpenState = false;
  public listFilter: FilterModel[];
  constructor(private authService: AuthCoreService,
              private mainService: MainService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getFilters();
  }

  public logOut() {
    this.authService.logOut();
  }

  public openModal(): void {
    console.log('open modal');
    const dialogRef = this.dialog.open(FilterModalComponent, {
      minWidth: '250px'
    });
  }



  public getFilters() {
    this.mainService.getFilters()
      .subscribe(res => {
        console.log('res', res);
        this.listFilter = res;
      });
  }

}
