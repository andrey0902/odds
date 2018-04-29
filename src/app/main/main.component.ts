import { Component, OnInit } from '@angular/core';
import { AuthCoreService } from '../core/services/auth-core.service';

@Component({
  selector: 'odds-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthCoreService) { }

  ngOnInit() {
  }

  public logOut() {
    this.authService.logOut();
  }

}
