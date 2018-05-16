import { Injectable } from '@angular/core';
import { SessionService } from './sessionService';
import { HttpClient, HttpParams } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ProfileService } from './profile.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { ConfigService } from '../configs/config.service';

@Injectable()
export class AuthCoreService {

  constructor(private http: HttpClient,
              private profileService: ProfileService,
              private router: Router) {
    this.profileService.user = this.getUser();
  }

  public isLogin(): boolean {
    return !!SessionService.getUser();
  }

  public login(data) {
    return this.http.post(ConfigService.signInPath, data)
      .do(response => {
        console.log('do', response);
        SessionService.setUser({name: 'Denis Marshal',
          id: 1,
          password: 5555,
          token: 66666});
        //  TODO need create method login with server and handler for add user for profile service
        this.profileService.user = this.getUser();
        this.router.navigate(['/']);
      })  .subscribe(response => {
        console.log(response);
        console.log(this.getUser());

        this.router.navigate(['/']);
      }, error => {
        SessionService.setUser({name: 'Denis Marshal',
          id: 1,
          password: 5555,
          token: 66666});
        this.router.navigate(['/']);
        console.error(error);

      });
  }

  public logOut() {
    SessionService.setUser(null);
    this.router.navigate(['/auth/sign-in']);
  }

  public getUser() {
    const user = SessionService.getUser();
    return user ? new UserModel(user) : null;
  }

  public getToken(): string {
   // return  SessionService.getUser() ? SessionService.getUser().token : null;
    return '66666';
  }

  public signUp(data: any) {
    console.log('data', data);
    console.log('ConfigService.registrationPath', ConfigService.registrationPath);
   return this.http.post(`${ConfigService.registrationPath}`, data);
  }

  public sendVerifyEmail(params) {
    return this.http.get(ConfigService.confirmEmailPath, {params: this.params(params)});
  }

  public resendEmail(email) {
    return this.http.post(ConfigService.resendConfirmationEmailPath, {email});
  }

  public params(filters) {
    if (filters) {
      let params: any = new HttpParams();
      for (const property in filters) {
        if (filters.hasOwnProperty(property) && filters[property] !== null) {
          if (Array.isArray(property)) {
            filters[property].forEach((element) => {
              params = params.append(property, element);
            });
          } else {
            params = params.append(property, filters[property]);
          }
        }
      }
      return params;
    }
  }

}
