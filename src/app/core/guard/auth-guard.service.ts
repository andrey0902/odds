import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/sessionService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const isLoginPage = state.url.indexOf('/auth/') !== -1;
    console.log('isLoginPage', isLoginPage);
    console.log('next', next);
    console.log('state', state);
    return this.checkLogin(isLoginPage);
  }

  private checkLogin(isLoginPage): boolean {
    if (!this.authService.isLogin()) {
      if ( isLoginPage) {
        return true;
      }
      this.router.navigate(['/auth/sign-in']);
      return false;
    } else if (this.authService.isLogin() && !isLoginPage) {
      return true;
    }

  }
}
