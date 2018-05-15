import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'odds-recommend-stake',
  templateUrl: './recommend-stake.component.html',
  styleUrls: ['./recommend-stake.component.scss']
})
export class RecommendStakeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecommendStakeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('this.data', this.data);
  }

}
