import { Injectable } from '@angular/core';
import {  HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { LoginService } from '../services/login.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor
{

    constructor(private service : LoginService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
			let token = this.service.token;
        if(token !=null){
            
          
           const authReq = req.clone({
						 headers:req.headers.set('Authorization', 'Bearer '+ token)
					 });
					 return next.handle(authReq);
				}
   

     return next.handle(req)
    };
}