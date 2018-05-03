import { Injectable } from '@angular/core';
import { SessionService } from './sessionService';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthCoreService {

  constructor(private http: HttpClient) { }

  public isLogin(): boolean {
    return !!SessionService.getUser();
  }

  public login() {
    SessionService.setUser({login: 'login',
    password: 5555,
    token: 66666});
  }

  public logOut() {
    SessionService.setUser(null);
  }

  public getUser() {
   return SessionService.getUser();
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
