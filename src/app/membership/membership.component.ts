import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odds-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public cancel() {
  //  TODO: send request to server
  }

}
