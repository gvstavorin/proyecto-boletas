import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private routes : Router, private Auth : LoginService){}
     canActivate(next: ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> |Promise<boolean> | boolean {
        
      if(this.Auth.isAuthenticated()){
           if(this.isTokenExpirado()){
            this.Auth.logout();
            this.routes.navigate(['/login']);
            return false;
           }
      
        return true;
      }

        this.routes.navigate(['/login']);
        return false;
    }


    isTokenExpirado():boolean{

        let token = this.Auth.token;
        let payload = this.Auth.obtenerDatosToken(token);
        let now = new Date().getTime() /1000;
        if(payload.exp < now){
                   return true;
        }
        {
            return false;
        }

    }
}