import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { Router } from '@angular/router';
import { AuthCoreService } from '../../core/services/auth-core.service';

@Component({
  selector: 'odds-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  public userEmail: string;
  constructor(private profileService: ProfileService,
              private router: Router,
              private authService: AuthCoreService) {
    this.userEmail = this.profileService.emailUser;
  }

  ngOnInit() {
  }

  public resendEmail() {
    console.log('need to send on the back userEmail', this.userEmail);
    this.authService.resendEmail(this.userEmail)
      .subscribe();
  }
}
