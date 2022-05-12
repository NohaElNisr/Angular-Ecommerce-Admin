import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';
import { Observable } from 'rxjs';
import { UserAPIService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceeptorService implements HttpInterceptor {

// constructor(private injector:Injector) { }

// intercept(req:any, next:any) {
//   let userservice=this.injector.get(UserAPIService);
//   let tokinreq=req.clone({
//     setHeaders:{
//       Authorization:`Bearer ${userservice.getToken()}`
//     }
//   })
//   return next.handle(tokinreq)

constructor(public auth: UserAPIService) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${this.auth.getToken()}`
    }
  });

  return next.handle(request);
}
}

