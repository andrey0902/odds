import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { MatDialog } from '@angular/material';
import { RecommendStakeComponent } from '../shared/components/recommend-stake/recommend-stake.component';

@Component({
  selector: 'odds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public filterStart = null;
  public filterEdge = null;
  @Input() public list: any;
  @Input() public noFilter: boolean;

  constructor(private dataService: MainService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  public applyFilter(event) {
    this.dataService.filter = event;
    this.dataService.checkSort(this.list, event);
  }

  public openModalCalc(item) {
    console.log('open modal calculation');
    const dialogRef = this.dialog.open(RecommendStakeComponent, {
      data: item,
      height: '50vh',
      width: '350px'
    });
  }



}
