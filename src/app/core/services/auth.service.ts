import { Injectable } from '@angular/core';
import { SessionService } from './sessionService';

@Injectable()
export class AuthService {

  constructor() { }

  public isLogin() {
    '';
  }

  public login() {
    SessionService.setUser({login: 'login',
    password: 5555});
  }

  public getUser() {
   return SessionService.getUser();
  }

}
