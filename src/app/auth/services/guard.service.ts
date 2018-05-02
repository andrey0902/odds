import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private profileService: ProfileService,
              private router: Router) { }

  public canActivate() {
    if (this.profileService.emailUser) {
      return true;
    } else {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }
  }
}
