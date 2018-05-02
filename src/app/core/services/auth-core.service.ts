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
    const token = SessionService.getUser().token;
    return token ? token : null;
  }

  public signUp(data: any) {
   return this.http.post(`${'http://test.com'}`, data)
      .pipe(catchError((error) => {
        console.log('error', error);
        return of(error);
      }));
  }

}
