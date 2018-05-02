import 'rxjs/add/operator/do';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthCoreService } from './auth-core.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
export class InterceptorErrorService implements HttpInterceptor {
  constructor(public auth: AuthCoreService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request) .pipe(catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        console.log('@@@@@@', error);
        if (error.status === 401 || error.status === 0) {
          // redirect to the login route
          // or show a modal
          console.log('@@@@@@');
        }
      }
      return of(error);
    }));

  }
}
