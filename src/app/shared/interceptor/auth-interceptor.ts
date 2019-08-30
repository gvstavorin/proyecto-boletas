import { Injectable } from '@angular/core';
import {  HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    constructor(private service : LoginService, private router :Router) { }


    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
        
     return next.handle(req).pipe(
         catchError(e=>{
              if(e.status==401){
                  if(this.service.isAuthenticated()){
                      let usuario = this.service.usuario;
                      this.service.logout();
                      swal.fire('Sesion expirada',`Hola ${usuario.username}, Vuelve a iniciar sesion!`, 'error')

                  }
                  this.router.navigate(['/login'])
                 }
                
                 if(e.status == 403){
                     
                    swal.fire('Acceso denegado',`Hola ${this.service.usuario.username} no tienes acceso a este recurso!`, 'error')
                     this.router.navigate(['/home'])
                 } 
                 return throwError(e);

         })

     );
    }
}