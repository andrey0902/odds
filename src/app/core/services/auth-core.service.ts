import { Injectable } from '@angular/core';
import { SessionService } from './sessionService';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ProfileService } from './profile.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

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

  public login() {
    SessionService.setUser({name: 'Denis Marshal',
      id: 1,
    password: 5555,
    token: 66666});
  //  TODO need create method login with server and handler for add user for profile service
    this.profileService.user = this.getUser();
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
   return this.http.post(`${'http://172.16.101.19:3000/auth/'}`, data)
      .pipe(catchError((error) => {
        console.log('error', error);
        return of(error);
      }));
  }

  public sendVerifiEmail(key) {
    return this.http.post('', key);
  }

}
