import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthCoreService } from '../../core/services/auth-core.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ResetGuard implements CanActivate {

  constructor(private authService: AuthCoreService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const email = route.paramMap.get( 'email');
    const key = route.paramMap.get('key');
    const params = {
      email,
      reset_password_token: key,
    };
    return this.authService.checkedAccess(params)
      .map(result => {
        return true;
      });
    //  return !!route.paramMap.get('key');
  }

}
