import { Injectable } from '@angular/core';
import { SessionService } from './sessionService';

@Injectable()
export class AuthService {

  constructor() { }

  public isLogin(): boolean {
    return !!SessionService.getUser();
  }

  public login() {
    SessionService.setUser({login: 'login',
    password: 5555});
  }

  public logOut() {
    SessionService.setUser(null);
  }

  public getUser() {
   return SessionService.getUser();
  }

}
