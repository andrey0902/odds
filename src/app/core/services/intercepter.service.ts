import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { AuthCoreService } from './auth-core.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthCoreService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Token: ${this.auth.getToken()}`);
    const token = this.auth.getToken();
    let authReq;
/*    request = request.clone({
      setHeaders: {
        Authorization: `X-Token-Authorization: ${this.auth.getToken()}`
      }
    });*/
    if (token) {
      authReq = request.clone({headers: request.headers.set('X-Token-Authorization', this.auth.getToken())});
    }

    return next.handle(authReq ? authReq : request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 0) {
          // TODO: redirect to the login route
          // or show a modal
          console.log('@@@@@@');
        }
      }
    });
  }
}
