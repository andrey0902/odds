import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { AuthCoreService } from '../../core/services/auth-core.service';

@Component({
  selector: 'odds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user;
  constructor(private profileService: ProfileService,
              private authService: AuthCoreService) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.profileService.getUser$()
      .subscribe(res => {
        this.user = res;
        console.log(this.user);
      });
  }

  public logOut() {
    this.authService.logOut();
  }
}
